import React, { useState } from 'react';
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
  Link as MuiLink
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const { authState, login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
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
      <Paper elevation={3} sx={{ maxWidth: 400, width: '100%' }}>
        <Card>
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h4" component="h1" gutterBottom>
                Virtual Card Manager
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Sign in to access your virtual cards
              </Typography>
            </Box>

            {authState.error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {authState.error}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
                required
                disabled={authState.loading}
                type="email"
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
                required
                disabled={authState.loading}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                disabled={authState.loading}
                sx={{ mt: 3 }}
              >
                {authState.loading ? <CircularProgress size={24} /> : 'Sign In'}
              </Button>
            </form>

            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Don't have an account?{' '}
                <MuiLink component={Link} to="/register">
                  Register now
                </MuiLink>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
};

export default Login; 