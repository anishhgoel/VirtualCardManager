require('dotenv').config();
const { PrismaClient } = require('./dist/generated/prisma');
const prisma = new PrismaClient();

async function createManualTransaction() {
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
    
    // Create a manual authorization record
    const authorization = await prisma.authorization.create({
      data: {
        stripeId: 'manual_test_auth_' + Date.now(),
        cardId: card.id,
        amountCents: 2500,
        currency: 'usd',
        merchant: 'TEST_MERCHANT',
        decision: 'APPROVED',
        raw: { test: true, message: 'This is a manual test transaction' }
      }
    });
    
    console.log('Created manual transaction:');
    console.log(authorization);
    
    // Verify it was saved
    const count = await prisma.authorization.count();
    console.log(`Total authorizations in database: ${count}`);
    
  } catch (error) {
    console.error('Error creating manual transaction:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createManualTransaction(); 