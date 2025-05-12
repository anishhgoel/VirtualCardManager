import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Box, CircularProgress } from '@mui/material';

const PrivateRoute: React.FC = () => {
  const { authState } = useAuth();

  // Show loading indicator while checking authentication
  if (authState.loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  // If not authenticated, redirect to login
  if (!authState.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Render the protected route
  return <Outlet />;
};

export default PrivateRoute; 