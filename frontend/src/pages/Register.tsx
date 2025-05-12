import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  TextField, 
  Button, 
  Typography, 
  Alert,
  CircularProgress,
  Paper,
  Link as MuiLink,
  InputAdornment,
  Tooltip
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { checkCardholderAvailability, registerUser } from '../services/api';
import { Check as CheckIcon, Error as ErrorIcon } from '@mui/icons-material';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    cardholderId: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Cardholder validation state
  const [checkingCardholder, setCheckingCardholder] = useState(false);
  const [cardholderAvailable, setCardholderAvailable] = useState<boolean | null>(null);
  const [cardholderMessage, setCardholderMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Reset cardholder validation when the field changes
    if (name === 'cardholderId') {
      setCardholderAvailable(null);
      setCardholderMessage('');
      
      // Only check availability if it's a valid format
      if (value && value.startsWith('ich_') && value.length > 7) {
        validateCardholderId(value);
      }
    }
  };
  
  // Debounce the cardholder validation to avoid too many API calls
  useEffect(() => {
    const timer = setTimeout(() => {
      if (formData.cardholderId && formData.cardholderId.startsWith('ich_') && formData.cardholderId.length > 7) {
        validateCardholderId(formData.cardholderId);
      }
    }, 800);
    
    return () => clearTimeout(timer);
  }, [formData.cardholderId]);
  
  const validateCardholderId = async (cardholderId: string) => {
    try {
      setCheckingCardholder(true);
      const result = await checkCardholderAvailability(cardholderId);
      setCardholderAvailable(result.available);
      setCardholderMessage(result.message);
    } catch (err: any) {
      setCardholderAvailable(false);
      setCardholderMessage('Error checking cardholder availability');
    } finally {
      setCheckingCardholder(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validate form data
    if (!formData.username || !formData.email || !formData.password || !formData.cardholderId) {
      setError('All fields are required');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!formData.cardholderId.startsWith('ich_')) {
      setError('Cardholder ID must start with "ich_"');
      return;
    }
    
    // Don't allow registration if cardholder ID is not available
    if (cardholderAvailable === false) {
      setError('This Cardholder ID is already registered with another account');
      return;
    }

    try {
      setLoading(true);

      // Use localStorage for now (client-side only), but our API is ready for server-side implementation
      const storedUsers = localStorage.getItem('registeredUsers');
      const usersList = storedUsers ? JSON.parse(storedUsers) : [];
      
      // Create user object
      const newUser = {
        id: `user_${Date.now()}`,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        cardholderId: formData.cardholderId,
        name: formData.username,
        createdAt: new Date().toISOString()
      };

      // Store registered users in localStorage
      usersList.push(newUser);
      localStorage.setItem('registeredUsers', JSON.stringify(usersList));

      // Auto-login after registration
      await login(formData.email, formData.password);

      // Navigate to dashboard
      navigate('/');
    } catch (error: any) {
      setError(error.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 64px)', // Adjust for AppBar
        padding: 2,
        backgroundColor: 'background.default'
      }}
    >
      <Paper elevation={3} sx={{ maxWidth: 500, width: '100%' }}>
        <Card>
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h4" component="h1" gutterBottom>
                Create Account
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Register to manage your virtual cards
              </Typography>
            </Box>

            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <TextField
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                disabled={loading}
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                disabled={loading}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                disabled={loading}
              />
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                disabled={loading}
              />
              <TextField
                label="Cardholder ID"
                name="cardholderId"
                value={formData.cardholderId}
                onChange={handleChange}
                placeholder="ich_xxxxxxxxxxxxxxxx"
                helperText={cardholderMessage || "Enter your Stripe Cardholder ID (starts with 'ich_')"}
                fullWidth
                margin="normal"
                required
                disabled={loading}
                error={cardholderAvailable === false}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {checkingCardholder && (
                        <CircularProgress size={20} />
                      )}
                      {!checkingCardholder && cardholderAvailable === true && (
                        <Tooltip title="Cardholder ID is available">
                          <CheckIcon color="success" />
                        </Tooltip>
                      )}
                      {!checkingCardholder && cardholderAvailable === false && (
                        <Tooltip title="Cardholder ID is already in use">
                          <ErrorIcon color="error" />
                        </Tooltip>
                      )}
                    </InputAdornment>
                  )
                }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                disabled={loading || cardholderAvailable === false}
                sx={{ mt: 3 }}
              >
                {loading ? <CircularProgress size={24} /> : 'Register'}
              </Button>
            </form>

            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Typography variant="body2">
                Already have an account?{' '}
                <MuiLink component={Link} to="/login">
                  Sign in
                </MuiLink>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
};

export default Register; 