require('dotenv').config();
const { PrismaClient } = require('./dist/generated/prisma');
const prisma = new PrismaClient();

const TEST_TRANSACTIONS = [
  {
    amountCents: 1500,
    currency: 'usd',
    merchant: 'STARBUCKS',
    decision: 'APPROVED',
    message: 'Coffee purchase'
  },
  {
    amountCents: 4500,
    currency: 'usd',
    merchant: 'SHELL_GAS',
    decision: 'APPROVED',
    message: 'Gas station'
  },
  {
    amountCents: 12000,
    currency: 'usd',
    merchant: 'BEST_BUY',
    decision: 'APPROVED',
    message: 'Electronics purchase'
  },
  {
    amountCents: 8000,
    currency: 'usd',
    merchant: 'AMAZON',
    decision: 'DECLINED',
    message: 'Online shopping'
  },
  {
    amountCents: 3200,
    currency: 'usd',
    merchant: 'UBER',
    decision: 'APPROVED',
    message: 'Ride sharing'
  }
];

async function createMultipleTransactions() {
  try {
    console.log('Searching for card...');
    
    // Find the card in our database
    const card = await prisma.card.findUnique({
      where: { stripeId: 'ic_1RNn1vRc1hHpOy74o899Fmbs' }
    });
    
    if (!card) {
      console.error('Card not found in database');
      return;
    }
    
    console.log(`Found card with ID: ${card.id}`);
    
    // Create transactions
    for (const tx of TEST_TRANSACTIONS) {
      const authorization = await prisma.authorization.create({
        data: {
          stripeId: 'manual_test_auth_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
          cardId: card.id,
          amountCents: tx.amountCents,
          currency: tx.currency,
          merchant: tx.merchant,
          decision: tx.decision,
          raw: { test: true, message: tx.message }
        }
      });
      
      console.log(`Created ${tx.decision} transaction for ${tx.merchant}: $${tx.amountCents/100}`);
      
      // Add a small delay to make sure timestamps are different
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    // Verify transactions were saved
    const count = await prisma.authorization.count();
    console.log(`Total authorizations in database: ${count}`);
    
  } catch (error) {
    console.error('Error creating transactions:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createMultipleTransactions(); 