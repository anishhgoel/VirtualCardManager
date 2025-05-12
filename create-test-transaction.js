// Initialize Stripe directly
require('dotenv').config();
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

// Card ID - replace with your actual card ID
const cardId = process.argv[2] || 'ic_1RNn1vRc1hHpOy74o899Fmbs';
const amount = parseInt(process.argv[3] || 3500); // $35.00
const merchantName = process.argv[4] || 'Test Coffee Shop';
const mcc = process.argv[5] || 'eating_places_restaurants'; // Valid category from Stripe docs
const merchantId = process.argv[6] || 'merch_starbucks';

async function createTestAuthorization() {
  try {
    console.log(`Creating test authorization for card ${cardId}...`);
    
    // Test that we can access the Stripe API
    const cards = await stripe.issuing.cards.list({ limit: 1 });
    console.log(`Successfully connected to Stripe API. Found ${cards.data.length} cards.`);
    
    // Create the authorization
    console.log(`Creating authorization: $${(amount/100).toFixed(2)} at ${merchantName} (${mcc})`);
    
    const authorization = await stripe.testHelpers.issuing.authorizations.create({
      amount: amount,
      currency: 'usd',
      card: cardId,
      merchant_data: {
        name: merchantName,
        category: mcc,
        network_id: merchantId
      }
    });
    
    console.log('Authorization created:');
    console.log(`ID: ${authorization.id}`);
    console.log(`Status: ${authorization.status}`);
    console.log(`Amount: $${(authorization.amount / 100).toFixed(2)}`);
    console.log(`Created: ${new Date(authorization.created * 1000).toLocaleString()}`);
    
    // If you want to manually approve/decline instead of using webhook rules
    if (authorization.status === 'pending') {
      console.log('\nTo approve: node approve-auth.js ' + authorization.id);
      console.log('To decline: node decline-auth.js ' + authorization.id);
    }
    
  } catch (error) {
    console.error('Error creating authorization:', error.message);
    if (error.raw) {
      console.error('Stripe error:', error.raw);
    }
  }
}

// Run the function
createTestAuthorization(); 