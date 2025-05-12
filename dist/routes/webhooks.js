"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stripe_1 = require("../config/stripe");
const stripeAdapter_1 = require("../services/stripeAdapter");
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const router = express_1.default.Router();
// Helper: Evaluate rules
async function evaluateRules(card, rules, authorization) {
    // LimitRule: check cumulative spend (lifetime, daily, monthly)
    for (const rule of rules.filter(r => r.type === 'SPEND_LIMIT')) {
        let total = 0;
        if (rule.spendInterval === 'LIFETIME') {
            total = await prisma.authorization.aggregate({
                where: { cardId: card.id, decision: 'APPROVED' },
                _sum: { amountCents: true },
            }).then(res => res._sum.amountCents || 0);
        }
        else if (rule.spendInterval === 'DAILY') {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            total = await prisma.authorization.aggregate({
                where: {
                    cardId: card.id,
                    decision: 'APPROVED',
                    createdAt: { gte: today },
                },
                _sum: { amountCents: true },
            }).then(res => res._sum.amountCents || 0);
        }
        else if (rule.spendInterval === 'MONTHLY') {
            const firstOfMonth = new Date();
            firstOfMonth.setDate(1);
            firstOfMonth.setHours(0, 0, 0, 0);
            total = await prisma.authorization.aggregate({
                where: {
                    cardId: card.id,
                    decision: 'APPROVED',
                    createdAt: { gte: firstOfMonth },
                },
                _sum: { amountCents: true },
            }).then(res => res._sum.amountCents || 0);
        }
        if (rule.spendLimitCents && total + authorization.amount > rule.spendLimitCents) {
            return { decision: 'DECLINED', reason: 'Spend limit exceeded' };
        }
    }
    // MerchantRule: MCC/merchant allow/block
    for (const rule of rules.filter(r => r.type === 'MERCHANT_CATEGORY')) {
        const merchantData = authorization.merchant_data;
        const mcc = merchantData.mcc;
        const merchant = authorization.merchant_data.network_id;
        if (rule.merchantBlockList && rule.merchantBlockList.split(',').includes(merchant)) {
            return { decision: 'DECLINED', reason: 'Merchant blocked' };
        }
        if (rule.categoryBlockList && rule.categoryBlockList.split(',').includes(mcc)) {
            return { decision: 'DECLINED', reason: 'Category blocked' };
        }
        if (rule.merchantAllowList && !rule.merchantAllowList.split(',').includes(merchant)) {
            return { decision: 'DECLINED', reason: 'Merchant not allowed' };
        }
        if (rule.categoryAllowList && !rule.categoryAllowList.split(',').includes(mcc)) {
            return { decision: 'DECLINED', reason: 'Category not allowed' };
        }
    }
    // TimeRule: day-of-week and hour check
    for (const rule of rules.filter(r => r.type === 'TIME_WINDOW')) {
        const now = new Date();
        const weekday = now.toLocaleString('en-US', { weekday: 'long' });
        const hour = now.getHours();
        if (rule.allowedWeekdays) {
            const allowed = rule.allowedWeekdays.split(',');
            if (!allowed.includes(weekday)) {
                return { decision: 'DECLINED', reason: 'Not allowed on this day' };
            }
        }
        if (rule.allowedHourStart !== null && rule.allowedHourStart !== undefined && hour < rule.allowedHourStart) {
            return { decision: 'DECLINED', reason: 'Too early' };
        }
        if (rule.allowedHourEnd !== null && rule.allowedHourEnd !== undefined && hour > rule.allowedHourEnd) {
            return { decision: 'DECLINED', reason: 'Too late' };
        }
    }
    return { decision: 'APPROVED' };
}
router.post('/stripe', async (req, res) => {
    const sig = req.headers['stripe-signature'];
    if (!sig || !stripe_1.STRIPE_WEBHOOK_SECRET) {
        return res.status(400).send('Webhook signature missing or webhook secret not configured');
    }
    try {
        const event = stripe_1.stripe.webhooks.constructEvent(req.body, sig, stripe_1.STRIPE_WEBHOOK_SECRET);
        console.log(`Processing webhook event: ${event.type}, ID: ${event.id}`);
        // Handle authorization request events (approval flows)
        if (event.type === 'issuing_authorization.request') {
            console.log('Processing authorization.request event');
            const authorization = event.data.object;
            // Find card in DB
            const dbCard = await prisma.card.findFirst({
                where: { stripeId: authorization.card },
                include: { rules: true }
            });
            if (!dbCard) {
                console.error('Card not found in DB:', authorization.card);
                return res.status(404).json({ error: 'Card not found in DB' });
            }
            // Evaluate rules
            const result = await evaluateRules(dbCard, dbCard.rules, authorization);
            let stripeResult;
            if (result.decision === 'APPROVED') {
                stripeResult = await (0, stripeAdapter_1.approveAuthorization)(authorization.id);
            }
            else {
                stripeResult = await (0, stripeAdapter_1.declineAuthorization)(authorization.id);
            }
            // Write transaction row
            const authRecord = await prisma.authorization.create({
                data: {
                    stripeId: authorization.id,
                    cardId: dbCard.id,
                    amountCents: authorization.amount,
                    currency: authorization.currency,
                    merchant: authorization.merchant_data.network_id,
                    decision: result.decision,
                    raw: JSON.parse(JSON.stringify(event)), // Serialize event to JSON
                },
            });
            console.log(`Created authorization record: ${authRecord.id} for ${authorization.id}`);
            return res.json({ decision: result.decision, reason: result.reason || null });
        }
        // Handle authorization created events (from test helpers and completed flows)
        else if (event.type === 'issuing_authorization.created') {
            console.log('Processing authorization.created event');
            const authorization = event.data.object;
            // Extract the card ID as a string
            const stripeCardId = typeof authorization.card === 'string'
                ? authorization.card
                : authorization.card?.id || '';
            console.log(`Looking for card with stripeId: ${stripeCardId}`);
            // Find card in DB
            const dbCard = await prisma.card.findFirst({
                where: { stripeId: stripeCardId }
            });
            if (!dbCard) {
                console.error('Card not found in DB:', authorization.card);
                const allCards = await prisma.card.findMany({
                    select: { id: true, stripeId: true }
                });
                console.log('All cards in DB:', JSON.stringify(allCards));
                return res.status(404).json({ error: 'Card not found in DB' });
            }
            console.log(`Found card: ${dbCard.id}`);
            // Check if this authorization already exists (to avoid duplicates)
            const existingAuth = await prisma.authorization.findUnique({
                where: { stripeId: authorization.id }
            });
            if (!existingAuth) {
                // Create a new authorization record
                const decision = authorization.status === 'closed' ? 'APPROVED' : authorization.status.toUpperCase();
                console.log(`Creating new record with decision: ${decision}`);
                try {
                    const authRecord = await prisma.authorization.create({
                        data: {
                            stripeId: authorization.id,
                            cardId: dbCard.id,
                            amountCents: authorization.amount,
                            currency: authorization.currency,
                            merchant: authorization.merchant_data.network_id,
                            decision: decision, // Status can be: pending, closed, reversed
                            raw: JSON.parse(JSON.stringify(event)), // Serialize event to JSON
                        },
                    });
                    console.log(`Created authorization record: ${authRecord.id} for ${authorization.id}`);
                }
                catch (err) {
                    console.error('Error creating authorization record:', err);
                }
            }
            else {
                console.log(`Authorization ${authorization.id} already exists, skipping`);
            }
            return res.json({ received: true });
        }
        // Default response for other event types
        res.json({ received: true });
    }
    catch (err) {
        console.error('Webhook error:', err);
        res.status(400).send(`Webhook Error: ${err.message || 'Unknown error'}`);
    }
});
exports.default = router;
