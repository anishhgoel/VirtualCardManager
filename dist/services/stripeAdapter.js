"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVirtualCard = createVirtualCard;
exports.freezeCard = freezeCard;
exports.unfreezeCard = unfreezeCard;
exports.approveAuthorization = approveAuthorization;
exports.declineAuthorization = declineAuthorization;
exports.getCardTestCredentials = getCardTestCredentials;
exports.getCardholderDetails = getCardholderDetails;
exports.getFundingSourceBalance = getFundingSourceBalance;
exports.getCardBalance = getCardBalance;
const stripe_1 = require("../config/stripe");
async function createVirtualCard(cardholderId, spendLimitCents) {
    const card = await stripe_1.stripe.issuing.cards.create({
        cardholder: cardholderId,
        type: 'virtual',
        status: 'active',
        currency: 'usd',
        spending_controls: spendLimitCents
            ? {
                spending_limits: [
                    {
                        amount: spendLimitCents,
                        interval: 'all_time',
                    },
                ],
            }
            : undefined,
    });
    // Return the card with guaranteed last4 property
    return {
        ...card,
        last4: card.last4 || '4242' // Fallback to 4242 if not available for some reason
    };
}
async function freezeCard(cardId) {
    return stripe_1.stripe.issuing.cards.update(cardId, { status: 'inactive' });
}
async function unfreezeCard(cardId) {
    return stripe_1.stripe.issuing.cards.update(cardId, { status: 'active' });
}
async function approveAuthorization(authorizationId) {
    return stripe_1.stripe.issuing.authorizations.approve(authorizationId);
}
async function declineAuthorization(authorizationId) {
    return stripe_1.stripe.issuing.authorizations.decline(authorizationId);
}
async function getCardTestCredentials(cardId) {
    const card = await stripe_1.stripe.issuing.cards.retrieve(cardId, {
        expand: ['number', 'cvc']
    });
    return {
        brand: card.brand,
        last4: card.last4,
        number: card.number,
        cvc: card.cvc,
        expMonth: card.exp_month,
        expYear: card.exp_year
    };
}
async function getCardholderDetails(cardholderId) {
    return stripe_1.stripe.issuing.cardholders.retrieve(cardholderId);
}
async function getFundingSourceBalance(cardholderId) {
    // First retrieve the cardholder to get funding source details
    const cardholder = await stripe_1.stripe.issuing.cardholders.retrieve(cardholderId);
    // Since Stripe's TypeScript definitions might not include all properties,
    // we need to cast to access the funding property
    const cardholderAny = cardholder;
    // Get funding source ID - in test mode this will be a test bank account
    if (!cardholderAny.funding) {
        throw new Error('No funding source found for this cardholder');
    }
    // Use any type to bypass TypeScript checking since this method might
    // not be in the current type definitions
    const balanceAny = await stripe_1.stripe.issuing.cardholders.retrieveFundingSource(cardholderId, cardholderAny.funding.object === 'issuing.funding_source' ? cardholderAny.funding.id : '');
    return {
        fundingSource: balanceAny,
        availableBalance: balanceAny.available ? balanceAny.available / 100 : 0, // Convert to dollars
        currency: balanceAny.currency || 'usd'
    };
}
async function getCardBalance(cardId) {
    // Get the card details
    const card = await stripe_1.stripe.issuing.cards.retrieve(cardId);
    // Get spending limits
    const spendingControls = card.spending_controls;
    const spendingLimits = spendingControls?.spending_limits || [];
    // Get transactions to calculate used amount
    const transactions = await stripe_1.stripe.issuing.transactions.list({
        card: cardId,
        limit: 100 // Get a reasonable number of transactions
    });
    // Calculate total spent amount
    const totalSpent = transactions.data.reduce((total, transaction) => {
        // Cast transaction to any to avoid type error
        const transactionAny = transaction;
        if (transactionAny.type === 'purchase') {
            return total + transaction.amount;
        }
        return total;
    }, 0);
    // For each spending limit, calculate remaining amount
    const limits = spendingLimits.map(limit => {
        return {
            interval: limit.interval,
            totalLimit: limit.amount / 100, // Convert to dollars
            spent: totalSpent / 100, // Convert to dollars
            remaining: (limit.amount - totalSpent) / 100 // Convert to dollars
        };
    });
    return {
        cardId,
        last4: card.last4,
        spendingLimits: limits,
        brand: card.brand,
        status: card.status
    };
}
