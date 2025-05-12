import axios from 'axios';
import { Card, Rule, CardDetails } from '../types';

const API_URL = 'http://localhost:4242/api';

// Create Axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Card API calls
export const getAllCards = async (): Promise<Card[]> => {
  const response = await api.get('/cards');
  return response.data;
};

export const createCard = async (cardholderId: string, description: string, spendLimitCents?: number): Promise<Card> => {
  const response = await api.post('/cards', { cardholderId, description, spendLimitCents });
  return response.data;
};

export const getCardDetails = async (cardId: string): Promise<CardDetails> => {
  const response = await api.get(`/cards/${cardId}`);
  return response.data;
};

export const freezeCard = async (cardId: string, freeze: boolean): Promise<Card> => {
  const response = await api.patch(`/cards/${cardId}/freeze`, { freeze });
  return response.data;
};

export const getCardTestCredentials = async (cardId: string) => {
  const response = await api.get(`/cards/${cardId}/test-credentials`);
  return response.data;
};

// Rule API calls
export const createRule = async (rule: Partial<Rule>): Promise<Rule> => {
  const response = await api.post('/rules', rule);
  return response.data;
};

export const deleteRule = async (ruleId: string): Promise<void> => {
  await api.delete(`/rules/${ruleId}`);
};

// Balance API calls
export const getFundingSourceBalance = async (cardholderId: string) => {
  const response = await api.get(`/cardholders/${cardholderId}/balance`);
  return response.data;
};

export const getCardBalance = async (cardId: string) => {
  const response = await api.get(`/cards/${cardId}/balance`);
  return response.data;
};

// User API calls
export const checkCardholderAvailability = async (cardholderId: string) => {
  const response = await api.get(`/users/check-cardholder/${cardholderId}`);
  return response.data;
};

export const registerUser = async (userData: {
  username: string;
  email: string;
  password: string;
  cardholderId: string;
}) => {
  const response = await api.post('/users/register', userData);
  return response.data;
};

export const loginUser = async (credentials: { email: string; password: string }) => {
  const response = await api.post('/users/login', credentials);
  return response.data;
};

// Transaction API calls
export const getAllTransactions = async (limit: number = 20) => {
  const response = await api.get(`/transactions?limit=${limit}`);
  return response.data;
};

export default api; 