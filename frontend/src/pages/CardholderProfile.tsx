import React, { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  CircularProgress,
  Alert,
  Button,
  TextField,
  IconButton,
  Tooltip,
  Paper,
  Divider,
  Avatar,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { ContentCopy as CopyIcon } from '@mui/icons-material';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { getAllCards, getFundingSourceBalance, getCardBalance } from '../services/api';
import { Card as CardType } from '../types';
import { Link } from 'react-router-dom';

// Define a type for Cardholder
interface Cardholder {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  created: string;
  metadata?: Record<string, string>;
  billing?: {
    address: {
      line1: string;
      line2?: string;
      city: string;
      state: string;
      postal_code: string;
      country: string;
    }
  }
}

// Define types for balance data
interface FundingSourceBalance {
  availableBalance: number;
  currency: string;
  fundingSource: any;
}

interface CardBalanceLimit {
  interval: string;
  totalLimit: number;
  spent: number;
  remaining: number;
}

interface CardBalance {
  cardId: string;
  last4: string;
  brand: string;
  status: string;
  spendingLimits: CardBalanceLimit[];
}

const CardholderProfile: React.FC = () => {
  const { authState } = useAuth();
  const [cardholder, setCardholder] = useState<Cardholder | null>(null);
  const [userCards, setUserCards] = useState<CardType[]>([]);
  const [fundingBalance, setFundingBalance] = useState<FundingSourceBalance | null>(null);
  const [cardBalances, setCardBalances] = useState<Record<string, CardBalance>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Copy text to clipboard
  const copyToClipboard = (text: string, description: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert(`${description} copied to clipboard`);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };
  
  useEffect(() => {
    const fetchData = async () => {
      if (!authState.user) return;
      
      try {
        setLoading(true);
        setError(null);
        
        // Fetch cardholder details using the authenticated user's cardholderId
        const API_URL = 'http://localhost:4242/api';
        const cardholderResponse = await axios.get(`${API_URL}/cardholders/${authState.user.cardholderId}`);
        setCardholder(cardholderResponse.data);
        
        // Fetch funding source balance
        try {
          const balanceResponse = await getFundingSourceBalance(authState.user.cardholderId);
          setFundingBalance(balanceResponse);
        } catch (balanceErr) {
          console.error('Error fetching funding source balance:', balanceErr);
          // Don't set an error, just log it - we want the rest of the page to load
        }
        
        // Fetch all cards for this user
        const cardsResponse = await getAllCards();
        setUserCards(cardsResponse);
        
        // Fetch balances for each card
        const balances: Record<string, CardBalance> = {};
        for (const card of cardsResponse) {
          try {
            const cardBalance = await getCardBalance(card.id);
            balances[card.id] = cardBalance;
          } catch (cardBalanceErr) {
            console.error(`Error fetching balance for card ${card.id}:`, cardBalanceErr);
            // Continue with other cards
          }
        }
        setCardBalances(balances);
      } catch (err: any) {
        console.error('Error fetching data: ', err);
        setError(err.response?.data?.error || err.message || 'Failed to fetch profile data');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [authState.user]);
  
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
        <CircularProgress />
      </Box>
    );
  }
  
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        My Profile
      </Typography>
      
      {error && (
        <Alert severity="error" sx={{ mb: 4 }}>
          {error}
        </Alert>
      )}
      
      {cardholder && (
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Avatar 
                sx={{ 
                  width: 64, 
                  height: 64, 
                  bgcolor: 'primary.main',
                  mr: 2
                }}
              >
                {cardholder.name ? cardholder.name.charAt(0).toUpperCase() : 'C'}
              </Avatar>
              <Box>
                <Typography variant="h5">
                  {cardholder.name || authState.user?.name || 'Unnamed Cardholder'}
                </Typography>
                <Chip 
                  label={cardholder.status} 
                  color={cardholder.status === 'active' ? 'success' : 'default'} 
                  size="small" 
                  sx={{ mt: 0.5 }}
                />
              </Box>
            </Box>
            
            <Divider sx={{ mb: 3 }} />
            
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.default' }}>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    Basic Information
                  </Typography>
                  
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      Cardholder ID:
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="body1">
                        {cardholder.id}
                      </Typography>
                      <Tooltip title="Copy to clipboard">
                        <IconButton 
                          size="small" 
                          onClick={() => copyToClipboard(cardholder.id, "Cardholder ID")}
                        >
                          <CopyIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>
                  
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      Email:
                    </Typography>
                    <Typography variant="body1">
                      {cardholder.email || authState.user?.email || 'Not provided'}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      Phone:
                    </Typography>
                    <Typography variant="body1">
                      {cardholder.phone || 'Not provided'}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      Created:
                    </Typography>
                    <Typography variant="body1">
                      {cardholder.created 
                        ? new Date(parseInt(cardholder.created) * 1000).toLocaleString() 
                        : 'Unknown'}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.default' }}>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    Billing Address
                  </Typography>
                  
                  {cardholder.billing?.address ? (
                    <>
                      <Typography variant="body1">
                        {cardholder.billing.address.line1}
                      </Typography>
                      {cardholder.billing.address.line2 && (
                        <Typography variant="body1">
                          {cardholder.billing.address.line2}
                        </Typography>
                      )}
                      <Typography variant="body1">
                        {cardholder.billing.address.city}, {cardholder.billing.address.state} {cardholder.billing.address.postal_code}
                      </Typography>
                      <Typography variant="body1">
                        {cardholder.billing.address.country}
                      </Typography>
                    </>
                  ) : (
                    <Typography variant="body1" color="text.secondary">
                      No billing address provided
                    </Typography>
                  )}
                </Paper>
              </Grid>
              
              {cardholder.metadata && Object.keys(cardholder.metadata).length > 0 && (
                <Grid item xs={12}>
                  <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.default' }}>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      Additional Information
                    </Typography>
                    
                    <Grid container spacing={2}>
                      {Object.entries(cardholder.metadata).map(([key, value]) => (
                        <Grid item xs={12} sm={6} key={key}>
                          <Box sx={{ mb: 1 }}>
                            <Typography variant="body2" color="text.secondary">
                              {key}:
                            </Typography>
                            <Typography variant="body1">
                              {value}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Paper>
                </Grid>
              )}
            </Grid>
            
            {/* New section to display funding source balance */}
            {fundingBalance && (
              <Grid item xs={12} sx={{ mt: 3 }}>
                <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.default' }}>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    Funding Source Balance
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h5" color="success.main" sx={{ fontWeight: 'bold' }}>
                      {fundingBalance.availableBalance.toLocaleString('en-US', {
                        style: 'currency',
                        currency: fundingBalance.currency.toUpperCase()
                      })}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                      available
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            )}
          </CardContent>
        </Card>
      )}
      
      <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2 }}>
        My Virtual Cards
      </Typography>
      
      {userCards.length === 0 ? (
        <Card sx={{ p: 3 }}>
          <Typography variant="body1" color="text.secondary" align="center">
            You don't have any virtual cards yet.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button 
              variant="contained" 
              component={Link} 
              to="/cards/new"
            >
              Create Your First Card
            </Button>
          </Box>
        </Card>
      ) : (
        <>
          {/* Debug card data */}
          <Box sx={{ display: 'none' }}>
            {console.log('Card data:', userCards)}
          </Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Card Number</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Available Balance</TableCell>
                  <TableCell>Created</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userCards.map((card) => (
                  <TableRow key={card.id}>
                    <TableCell>
                      {card.last4 
                        ? `**** **** **** ${card.last4}` 
                        : '**** **** **** 4242'}
                    </TableCell>
                    <TableCell>{card.description || 'No description'}</TableCell>
                    <TableCell>
                      <Chip 
                        label={card.status} 
                        color={card.status === 'active' ? 'success' : 'default'} 
                        size="small" 
                      />
                    </TableCell>
                    <TableCell>
                      {cardBalances[card.id] ? (
                        <>
                          {cardBalances[card.id].spendingLimits.map((limit, index) => (
                            <Box key={index} sx={{ mb: index < cardBalances[card.id].spendingLimits.length - 1 ? 1 : 0 }}>
                              <Typography variant="body2" color="text.secondary">
                                {limit.interval === 'all_time' ? 'Lifetime' : 
                                 limit.interval === 'per_day' ? 'Daily' : 
                                 limit.interval === 'per_month' ? 'Monthly' : limit.interval}:
                              </Typography>
                              <Typography 
                                variant="body2" 
                                color={limit.remaining > 0 ? 'success.main' : 'error.main'}
                                fontWeight="bold"
                              >
                                {limit.remaining.toLocaleString('en-US', {
                                  style: 'currency',
                                  currency: 'USD'
                                })}
                                <Typography component="span" variant="caption" color="text.secondary">
                                  {' '}of{' '}
                                  {limit.totalLimit.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                  })}
                                </Typography>
                              </Typography>
                            </Box>
                          ))}
                        </>
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          Loading...
                        </Typography>
                      )}
                    </TableCell>
                    <TableCell>{new Date(card.createdAt).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Button 
                        variant="outlined" 
                        size="small" 
                        component={Link} 
                        to={`/cards/${card.id}`}
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </Box>
  );
};

export default CardholderProfile; 