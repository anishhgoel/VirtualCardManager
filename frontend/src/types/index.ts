// Type definitions for our application

export interface Card {
  id: string;
  cardholderId: string;
  stripeId: string;
  status: string;
  description?: string;
  last4?: string;
  masked_pan?: string;
  createdAt: string;
}

export enum RuleType {
  SPEND_LIMIT = 'SPEND_LIMIT',
  MERCHANT_CATEGORY = 'MERCHANT_CATEGORY',
  TIME_WINDOW = 'TIME_WINDOW'
}

export enum SpendInterval {
  DAILY = 'DAILY',
  MONTHLY = 'MONTHLY',
  LIFETIME = 'LIFETIME'
}

export interface Rule {
  id: string;
  cardId: string;
  type: RuleType;
  spendLimitCents?: number;
  spendInterval?: SpendInterval;
  merchantAllowList?: string;
  merchantBlockList?: string;
  categoryAllowList?: string;
  categoryBlockList?: string;
  allowedWeekdays?: string;
  allowedHourStart?: number;
  allowedHourEnd?: number;
  createdAt: string;
}

export interface Authorization {
  id: string;
  stripeId: string;
  cardId: string;
  amountCents: number;
  currency: string;
  merchant: string;
  decision: 'APPROVED' | 'DECLINED' | 'PENDING';
  createdAt: string;
}

export interface TransactionWithCard extends Authorization {
  card: {
    id: string;
    last4?: string;
    description?: string;
  };
}

export interface CardDetails extends Card {
  rules: Rule[];
  authorizations: Authorization[];
}

export interface User {
  id: string;
  username: string;
  email: string;
  password?: string;
  cardholderId: string;
  name?: string;
  createdAt: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
} 