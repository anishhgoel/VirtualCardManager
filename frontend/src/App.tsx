/**
 * @fileoverview Main App component
 * @imports
 * import Dashboard from './pages/Dashboard'
 * import CardDetails from './pages/CardDetails'
 * import CreateCard from './pages/CreateCard'
 * import Layout from './components/Layout'
 * import CardholderProfile from './pages/CardholderProfile'
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Components and Pages
import Dashboard from './pages/Dashboard';
import CardDetails from './pages/CardDetails';
import CreateCard from './pages/CreateCard';
import CardholderProfile from './pages/CardholderProfile';
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

// Create a theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#6772e5', // Stripe-like purple
    },
    secondary: {
      main: '#32325d', // Darker purple
    },
    background: {
      default: '#f7f8fc',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route element={<PrivateRoute />}>
              <Route element={<Layout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/cards/new" element={<CreateCard />} />
                <Route path="/cards/:id" element={<CardDetails />} />
                <Route path="/cardholder" element={<CardholderProfile />} />
              </Route>
            </Route>

            {/* Fallback redirect to dashboard */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
