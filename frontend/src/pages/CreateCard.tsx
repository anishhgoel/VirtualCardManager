import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Alert,
  CircularProgress,
  InputAdornment
} from '@mui/material';
import { createCard } from '../services/api';

const CreateCard: React.FC = () => {
  const navigate = useNavigate();
  const [cardholderId, setCardholderId] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [spendLimit, setSpendLimit] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Convert spend limit to cents
      const spendLimitCents = spendLimit ? Math.floor(parseFloat(spendLimit) * 100) : undefined;
      
      const card = await createCard(cardholderId, description, spendLimitCents);
      navigate(`/cards/${card.id}`);
    } catch (err: any) {
      setError(err.response?.data?.error || err.message || 'Failed to create card');
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Create New Virtual Card
      </Typography>
      
      <Card sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
        <CardContent>
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}
          
          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 3 }}>
              <TextField
                label="Cardholder ID"
                value={cardholderId}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCardholderId(e.target.value)}
                fullWidth
                required
                placeholder="ich_xxxxxxxxxxxxxxxx"
                disabled={loading}
                helperText="Enter your Stripe Cardholder ID (starts with 'ich_')"
              />
            </Box>
            
            <Box sx={{ mb: 3 }}>
              <TextField
                label="Description"
                value={description}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                fullWidth
                required
                placeholder="Travel expenses"
                disabled={loading}
                helperText="Enter a description for what this card will be used for"
              />
            </Box>
            
            <Box sx={{ mb: 4 }}>
              <TextField
                label="Spend Limit"
                value={spendLimit}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSpendLimit(e.target.value)}
                fullWidth
                type="number"
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                placeholder="1000"
                disabled={loading}
                helperText="Optional: Set a lifetime spend limit for this card"
              />
            </Box>
            
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading || !cardholderId || !description}
            >
              {loading ? <CircularProgress size={24} /> : 'Create Virtual Card'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CreateCard; 