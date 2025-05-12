// Initialize Stripe directly
require('dotenv').config();
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

// Authorization ID to decline
const authId = process.argv[2];
const reason = process.argv[3] || 'rule_violation'; // Other options: 'suspected_fraud', 'invalid_card'

if (!authId) {
  console.error('Please provide an authorization ID: node decline-auth.js <auth_id> [reason]');
  process.exit(1);
}

async function declineAuthorization() {
  try {
    console.log(`Declining authorization ${authId} with reason: ${reason}...`);
    
    const decline = await stripe.issuing.authorizations.decline(authId, {
      reason: reason
    });
    
    console.log('Authorization declined:');
    console.log(`ID: ${decline.id}`);
    console.log(`Status: ${decline.status}`);
    console.log(`Amount: $${(decline.amount / 100).toFixed(2)}`);
    console.log(`Decline reason: ${decline.decline_reason || reason}`);
    
  } catch (error) {
    console.error('Error declining authorization:', error.message);
    if (error.raw) {
      console.error('Stripe error:', error.raw);
    }
  }
}

// Run the function
declineAuthorization(); 