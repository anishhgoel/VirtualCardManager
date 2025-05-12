import express from 'express';
import { PrismaClient } from '../generated/prisma';
import {
  createVirtualCard,
  freezeCard,
  unfreezeCard,
  getCardTestCredentials,
  getCardholderDetails,
  getFundingSourceBalance,
  getCardBalance
} from '../services/stripeAdapter';
import { stripe } from '../config/stripe';

const prisma = new PrismaClient();
const router = express.Router();

// GET /cards → get all cards
router.get('/cards', async (req, res) => {
  try {
    const cards = await prisma.card.findMany({
      orderBy: { createdAt: 'desc' },
    });

    // For any card that doesn't have last4, try to fetch it from Stripe
    const cardsWithDetails = await Promise.all(cards.map(async (card) => {
      // If the card already has last4, just return it
      if (card.last4) {
        return {
          ...card,
          masked_pan: `**** **** **** ${card.last4}`
        };
      }

      // If no last4, try to fetch from Stripe
      try {
        const stripeCard = await stripe.issuing.cards.retrieve(card.stripeId);
        
        // Update the database with the last4
        if (stripeCard.last4) {
          await prisma.card.update({
            where: { id: card.id },
            data: { last4: stripeCard.last4 }
          });
        }
        
        return {
          ...card,
          last4: stripeCard.last4,
          masked_pan: `**** **** **** ${stripeCard.last4}`
        };
      } catch (error) {
        // If there's an error, return the card as is
        return {
          ...card,
          masked_pan: card.last4 ? `**** **** **** ${card.last4}` : '**** **** **** ????'
        };
      }
    }));

    res.json(cardsWithDetails);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// POST /cards → create card + default rules, return masked PAN
router.post('/cards', async (req, res) => {
  try {
    const { cardholderId, description, spendLimitCents } = req.body;
    const card = await createVirtualCard(cardholderId, spendLimitCents);
    
    // Log card details to verify last4 is available
    console.log('Created card with last4:', card.last4);
    
    // Save card in DB with last4
    const dbCard = await prisma.card.create({
      data: {
        cardholderId,
        description: description || null,
        stripeId: card.id,
        status: card.status,
        last4: card.last4,
      },
    });
    // Add default rules (example: $1000 lifetime limit)
    await prisma.rule.create({
      data: {
        cardId: dbCard.id,
        type: 'SPEND_LIMIT',
        spendLimitCents: 100000,
        spendInterval: 'LIFETIME',
      },
    });
    res.json({
      id: dbCard.id,
      last4: card.last4,
      description: dbCard.description,
      status: card.status,
      masked_pan: `**** **** **** ${card.last4}`,
    });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// PATCH /cards/:id/freeze → freeze or unfreeze
router.patch('/cards/:id/freeze', async (req, res) => {
  try {
    const { freeze } = req.body; // freeze: true/false
    const dbCard = await prisma.card.findUnique({ where: { id: req.params.id } });
    if (!dbCard) return res.status(404).json({ error: 'Card not found' });
    const updated = freeze
      ? await freezeCard(dbCard.stripeId)
      : await unfreezeCard(dbCard.stripeId);
    await prisma.card.update({ where: { id: dbCard.id }, data: { status: updated.status } });
    res.json({ id: dbCard.id, status: updated.status });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// GET /cards/:id → card details, active rules, last ten transactions
router.get('/cards/:id', async (req, res) => {
  try {
    console.log(`Fetching details for card ID: ${req.params.id}`);
    
    const dbCard = await prisma.card.findUnique({
      where: { id: req.params.id },
      include: {
        rules: true,
        authorizations: { orderBy: { createdAt: 'desc' }, take: 10 },
      },
    });
    
    if (!dbCard) {
      console.log(`Card not found: ${req.params.id}`);
      return res.status(404).json({ error: 'Card not found' });
    }
    
    console.log(`Found card with ${dbCard.authorizations.length} authorizations`);
    if (dbCard.authorizations.length > 0) {
      console.log(`Most recent authorization: ${JSON.stringify(dbCard.authorizations[0])}`);
    }
    
    res.json(dbCard);
  } catch (err: any) {
    console.error(`Error fetching card: ${err.message}`);
    res.status(400).json({ error: err.message });
  }
});

// POST /rules → add a rule to a card
router.post('/rules', async (req, res) => {
  try {
    const rule = await prisma.rule.create({ data: req.body });
    res.json(rule);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /rules/:id → remove a rule
router.delete('/rules/:id', async (req, res) => {
  try {
    await prisma.rule.delete({ where: { id: req.params.id } });
    res.json({ success: true });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// GET /cards/:id/test-credentials → get test credentials for using the card
router.get('/cards/:id/test-credentials', async (req, res) => {
  try {
    const dbCard = await prisma.card.findUnique({ where: { id: req.params.id } });
    if (!dbCard) return res.status(404).json({ error: 'Card not found' });
    
    // Only active cards can be used for testing
    if (dbCard.status !== 'active') {
      return res.status(400).json({ error: 'Card must be active to get test credentials' });
    }
    
    const credentials = await getCardTestCredentials(dbCard.stripeId);
    res.json(credentials);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// GET /cardholders/:id → get cardholder details
router.get('/cardholders/:id', async (req, res) => {
  try {
    const cardholder = await getCardholderDetails(req.params.id);
    res.json(cardholder);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// GET /cardholders/:id/balance → get funding source balance
router.get('/cardholders/:id/balance', async (req, res) => {
  try {
    const balance = await getFundingSourceBalance(req.params.id);
    res.json(balance);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// GET /cards/:id/balance → get card balance
router.get('/cards/:id/balance', async (req, res) => {
  try {
    const card = await prisma.card.findUnique({
      where: { id: req.params.id }
    });
    
    if (!card) {
      return res.status(404).json({ error: 'Card not found' });
    }
    
    const balance = await getCardBalance(card.stripeId);
    res.json(balance);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// One-time utility route to update actual last4 values for existing cards from Stripe
router.get('/cards/update-last4', async (req, res) => {
  try {
    const cards = await prisma.card.findMany();
    const updatedCards = [];
    const errors = [];
    
    for (const card of cards) {
      try {
        // Get actual card details from Stripe
        const stripeCard = await stripe.issuing.cards.retrieve(card.stripeId);
        
        // Update the card with the correct last4 value
        if (stripeCard.last4) {
          const updated = await prisma.card.update({
            where: { id: card.id },
            data: { 
              last4: stripeCard.last4
            }
          });
          
          updatedCards.push(updated);
        }
      } catch (error: any) {
        console.error(`Error updating card ${card.id}:`, error);
        errors.push({ id: card.id, error: error.message });
      }
    }
    
    res.json({ 
      updated: updatedCards.length,
      errors: errors.length, 
      cards: updatedCards,
      errorDetails: errors
    });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// GET /transactions → get all recent transactions across all cards
router.get('/transactions', async (req, res) => {
  try {
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 20;
    
    const transactions = await prisma.authorization.findMany({
      orderBy: { createdAt: 'desc' },
      take: limit,
      include: {
        card: {
          select: {
            id: true,
            last4: true,
            description: true
          }
        }
      }
    });
    
    res.json(transactions);
  } catch (err: any) {
    console.error(`Error fetching transactions: ${err.message}`);
    res.status(400).json({ error: err.message });
  }
});

export default router; 