import { stripe } from '../config/stripe';
import Stripe from 'stripe';

export async function createCard(cardholderId: string) {
  try {
    const card = await stripe.issuing.cards.create({
      cardholder: cardholderId,
      type: 'virtual',
      status: 'active',
      currency: 'usd',
      spending_controls: {
        spending_limits: [
          {
            amount: 100000, // $1,000.00
            interval: 'all_time',
          },
        ],
      },
    });

    console.log('Created new card:', {
      id: card.id,
      last4: card.last4,
      status: card.status,
      spending_controls: card.spending_controls
    });

    return card;
  } catch (error) {
    console.error('Error creating card:', error);
    throw error;
  }
}

export async function approveAuthorization(authorizationId: string) {
  try {
    const authorization = await stripe.issuing.authorizations.approve(authorizationId);
    console.log('Approved authorization:', {
      id: authorization.id,
      amount: authorization.amount,
      status: authorization.status
    });
    return authorization;
  } catch (error) {
    console.error('Error approving authorization:', error);
    throw error;
  }
}

export async function declineAuthorization(authorizationId: string) {
  try {
    const authorization = await stripe.issuing.authorizations.decline(authorizationId);
    console.log('Declined authorization:', {
      id: authorization.id,
      amount: authorization.amount,
      status: authorization.status
    });
    return authorization;
  } catch (error) {
    console.error('Error declining authorization:', error);
    throw error;
  }
} 