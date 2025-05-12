// Initialize Stripe directly
require('dotenv').config();
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

// Authorization ID to approve
const authId = process.argv[2];

if (!authId) {
  console.error('Please provide an authorization ID: node approve-auth.js <auth_id>');
  process.exit(1);
}

async function approveAuthorization() {
  try {
    console.log(`Approving authorization ${authId}...`);
    
    const approval = await stripe.issuing.authorizations.approve(authId);
    
    console.log('Authorization approved:');
    console.log(`ID: ${approval.id}`);
    console.log(`Status: ${approval.status}`);
    console.log(`Amount: $${(approval.amount / 100).toFixed(2)}`);
    
  } catch (error) {
    console.error('Error approving authorization:', error.message);
    if (error.raw) {
      console.error('Stripe error:', error.raw);
    }
  }
}

// Run the function
approveAuthorization(); 