"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCard = createCard;
exports.approveAuthorization = approveAuthorization;
exports.declineAuthorization = declineAuthorization;
const stripe_1 = require("../config/stripe");
async function createCard(cardholderId) {
    try {
        const card = await stripe_1.stripe.issuing.cards.create({
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
    }
    catch (error) {
        console.error('Error creating card:', error);
        throw error;
    }
}
async function approveAuthorization(authorizationId) {
    try {
        const authorization = await stripe_1.stripe.issuing.authorizations.approve(authorizationId);
        console.log('Approved authorization:', {
            id: authorization.id,
            amount: authorization.amount,
            status: authorization.status
        });
        return authorization;
    }
    catch (error) {
        console.error('Error approving authorization:', error);
        throw error;
    }
}
async function declineAuthorization(authorizationId) {
    try {
        const authorization = await stripe_1.stripe.issuing.authorizations.decline(authorizationId);
        console.log('Declined authorization:', {
            id: authorization.id,
            amount: authorization.amount,
            status: authorization.status
        });
        return authorization;
    }
    catch (error) {
        console.error('Error declining authorization:', error);
        throw error;
    }
}
