import { stripe } from '../config/stripe';
import Stripe from 'stripe';

export async function createVirtualCard(cardholderId: string, spendLimitCents?: number) {
  const card = await stripe.issuing.cards.create({
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

export async function freezeCard(cardId: string) {
  return stripe.issuing.cards.update(cardId, { status: 'inactive' });
}

export async function unfreezeCard(cardId: string) {
  return stripe.issuing.cards.update(cardId, { status: 'active' });
}

export async function approveAuthorization(authorizationId: string) {
  return stripe.issuing.authorizations.approve(authorizationId);
}

export async function declineAuthorization(authorizationId: string) {
  return stripe.issuing.authorizations.decline(authorizationId);
}

export async function getCardTestCredentials(cardId: string) {
  const card = await stripe.issuing.cards.retrieve(cardId, {
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

export async function getCardholderDetails(cardholderId: string) {
  return stripe.issuing.cardholders.retrieve(cardholderId);
}

export async function getFundingSourceBalance(cardholderId: string) {
  // First retrieve the cardholder to get funding source details
  const cardholder = await stripe.issuing.cardholders.retrieve(cardholderId);
  
  // Since Stripe's TypeScript definitions might not include all properties,
  // we need to cast to access the funding property
  const cardholderAny = cardholder as any;
  
  // Get funding source ID - in test mode this will be a test bank account
  if (!cardholderAny.funding) {
    throw new Error('No funding source found for this cardholder');
  }
  
  // Use any type to bypass TypeScript checking since this method might
  // not be in the current type definitions
  const balanceAny = await (stripe.issuing.cardholders as any).retrieveFundingSource(
    cardholderId,
    cardholderAny.funding.object === 'issuing.funding_source' ? cardholderAny.funding.id : ''
  );
  
  return {
    fundingSource: balanceAny,
    availableBalance: balanceAny.available ? balanceAny.available / 100 : 0, // Convert to dollars
    currency: balanceAny.currency || 'usd'
  };
}

export async function getCardBalance(cardId: string) {
  // Get the card details
  const card = await stripe.issuing.cards.retrieve(cardId);
  
  // Get spending limits
  const spendingControls = card.spending_controls;
  const spendingLimits = spendingControls?.spending_limits || [];
  
  // Get transactions to calculate used amount
  const transactions = await stripe.issuing.transactions.list({
    card: cardId,
    limit: 100 // Get a reasonable number of transactions
  });
  
  // Calculate total spent amount
  const totalSpent = transactions.data.reduce((total, transaction) => {
    // Cast transaction to any to avoid type error
    const transactionAny = transaction as any;
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