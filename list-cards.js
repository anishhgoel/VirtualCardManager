// Initialize Stripe directly
require('dotenv').config();
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

async function listCards() {
  try {
    const cards = await stripe.issuing.cards.list({ limit: 10 });
    
    console.log('Available Issuing Cards:');
    console.log('------------------------');
    
    if (cards.data.length === 0) {
      console.log('No cards found.');
      return;
    }
    
    cards.data.forEach(card => {
      console.log(`ID: ${card.id}`);
      console.log(`Last 4: ${card.last4 || 'N/A'}`);
      console.log(`Status: ${card.status}`);
      console.log(`Type: ${card.type}`);
      console.log(`Created: ${new Date(card.created * 1000).toLocaleString()}`);
      console.log('------------------------');
    });
    
  } catch (error) {
    console.error('Error listing cards:', error.message);
    if (error.raw) {
      console.error('Stripe error:', error.raw);
    }
  }
}

// Run the function
listCards(); 