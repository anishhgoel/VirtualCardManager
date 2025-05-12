// Initialize Stripe directly
require('dotenv').config();
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

// Card ID - replace with your actual card ID
const cardId = process.argv[2] || 'ic_1RNn1vRc1hHpOy74o899Fmbs';

// Define different types of test transactions
const transactions = [
  {
    amount: 1500, // $15.00
    merchantName: 'Starbucks Coffee',
    mcc: 'eating_places_restaurants',
    merchantId: 'merch_starbucks'
  },
  {
    amount: 4500, // $45.00
    merchantName: 'Shell Gas Station',
    mcc: 'service_stations',
    merchantId: 'merch_shell'
  },
  {
    amount: 12000, // $120.00
    merchantName: 'Best Buy',
    mcc: 'electronics_stores',
    merchantId: 'merch_bestbuy'
  },
  {
    amount: 8000, // $80.00
    merchantName: 'Amazon',
    mcc: 'book_stores',
    merchantId: 'merch_amazon'
  },
  {
    amount: 3200, // $32.00
    merchantName: 'Uber',
    mcc: 'service_stations',
    merchantId: 'merch_uber'
  }
];

async function createTestTransactions() {
  console.log(`Creating ${transactions.length} test transactions for card ${cardId}...`);
  console.log('------------------------------------------------');
  
  // Test that we can access the Stripe API
  try {
    const cards = await stripe.issuing.cards.list({ limit: 1 });
    console.log(`Successfully connected to Stripe API. Found ${cards.data.length} cards.`);
  } catch (error) {
    console.error('Failed to connect to Stripe API:', error.message);
    return;
  }
  
  for (const [index, tx] of transactions.entries()) {
    try {
      console.log(`\nTransaction ${index + 1}/${transactions.length}:`);
      console.log(`Merchant: ${tx.merchantName} (${tx.mcc})`);
      console.log(`Amount: $${(tx.amount / 100).toFixed(2)}`);
      
      const authorization = await stripe.testHelpers.issuing.authorizations.create({
        amount: tx.amount,
        currency: 'usd',
        card: cardId,
        merchant_data: {
          name: tx.merchantName,
          category: tx.mcc,
          network_id: tx.merchantId
        }
      });
      
      console.log(`Status: ${authorization.status}`);
      console.log(`ID: ${authorization.id}`);
      
      // Add a delay between transactions
      if (index < transactions.length - 1) {
        console.log('Waiting 2 seconds before next transaction...');
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
    } catch (error) {
      console.error(`Error creating transaction ${index + 1}:`, error.message);
      if (error.raw) {
        console.error('Stripe error:', error.raw);
      }
    }
  }
  
  console.log('\n------------------------------------------------');
  console.log('All test transactions completed!');
}

// Run the function
createTestTransactions(); 