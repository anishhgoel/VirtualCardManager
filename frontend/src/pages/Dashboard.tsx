import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Chip, 
  Box,
  CircularProgress,
  Paper,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { Card as CardType, TransactionWithCard } from '../types';
import { getAllCards, getAllTransactions } from '../services/api';
import { useAuth } from '../context/AuthContext';

// Helper function to format amount
const formatAmount = (amountCents: number, currency: string) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(amountCents / 100);
};

const Dashboard: React.FC = () => {
  const { authState } = useAuth();
  const [cards, setCards] = useState<CardType[]>([]);
  const [transactions, setTransactions] = useState<TransactionWithCard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [fetchedCards, fetchedTransactions] = await Promise.all([
          getAllCards(),
          getAllTransactions(15) // Get last 15 transactions
        ]);
        setCards(fetchedCards);
        setTransactions(fetchedTransactions);
      } catch (err: any) {
        setError(err.response?.data?.error || err.message || 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3, color: 'error.main' }}>
        <Typography variant="h6">Error: {error}</Typography>
        <Button variant="contained" onClick={() => window.location.reload()}>
          Retry
        </Button>
      </Box>
    );
  }

  return (
    <div>
      <Paper sx={{ p: 3, mb: 4, bgcolor: 'background.default' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome, {authState.user?.name || authState.user?.username || 'User'}!
        </Typography>
        <Typography variant="body1">
          Manage your virtual cards and transactions from this dashboard.
        </Typography>
        {authState.user && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Your Cardholder ID: {authState.user.cardholderId}
            </Typography>
          </Box>
        )}
      </Paper>

      {/* Recent Transactions Section */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Recent Transactions
        </Typography>
        
        {transactions.length === 0 ? (
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="body1" color="text.secondary">
              No transactions found. Create a card and make a purchase to see transactions here.
            </Typography>
          </Paper>
        ) : (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Card</TableCell>
                  <TableCell>Merchant</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id} 
                    sx={{ 
                      '&:hover': { bgcolor: 'action.hover' },
                      cursor: 'pointer'
                    }}
                    onClick={() => window.location.href = `/cards/${transaction.cardId}`}
                  >
                    <TableCell>
                      {new Date(transaction.createdAt).toLocaleString()}
                    </TableCell>
                    <TableCell>
                      {transaction.card.last4 
                        ? `**** ${transaction.card.last4}` 
                        : 'Unknown Card'
                      }
                      {transaction.card.description && (
                        <Typography variant="caption" display="block" color="text.secondary">
                          {transaction.card.description}
                        </Typography>
                      )}
                    </TableCell>
                    <TableCell>{transaction.merchant}</TableCell>
                    <TableCell>{formatAmount(transaction.amountCents, transaction.currency)}</TableCell>
                    <TableCell>
                      <Chip 
                        label={transaction.decision} 
                        color={
                          transaction.decision === 'APPROVED' ? 'success' : 
                          transaction.decision === 'DECLINED' ? 'error' : 'warning'
                        }
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5">
          Your Virtual Cards
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          component={Link} 
          to="/cards/new"
        >
          Create New Card
        </Button>
      </Box>

      {cards.length === 0 ? (
        <Card sx={{ p: 4, textAlign: 'center' }}>
          <CardContent>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              You don't have any virtual cards yet
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Create your first virtual card to get started
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button 
              variant="contained" 
              color="primary" 
              component={Link} 
              to="/cards/new"
            >
              Create First Card
            </Button>
          </CardActions>
        </Card>
      ) : (
        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="h6" component="div">
                      {card.last4 
                        ? `**** **** **** ${card.last4}` 
                        : '**** **** **** 4242'}
                    </Typography>
                    <Chip 
                      label={card.status} 
                      color={card.status === 'active' ? 'success' : 'default'} 
                      size="small" 
                    />
                  </Box>
                  <Typography variant="body1" color="text.primary" gutterBottom>
                    {card.description || 'No description'}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Created: {new Date(card.createdAt).toLocaleDateString()}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    component={Link} 
                    to={`/cards/${card.id}`}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Dashboard; 