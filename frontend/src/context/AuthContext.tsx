import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthState } from '../types';
import { useNavigate } from 'react-router-dom';

// Default auth state
const defaultAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: true,
  error: null,
};

// Create auth context
const AuthContext = createContext<{
  authState: AuthState;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}>({
  authState: defaultAuthState,
  login: async () => {},
  logout: () => {},
});

// Auth provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(defaultAuthState);
  const navigate = useNavigate();

  // Check for existing auth on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check for stored user in localStorage
        const storedUser = localStorage.getItem('user');
        
        if (storedUser) {
          const user = JSON.parse(storedUser) as User;
          setAuthState({
            isAuthenticated: true,
            user,
            loading: false,
            error: null,
          });
        } else {
          setAuthState({
            ...defaultAuthState,
            loading: false,
          });
        }
      } catch (error) {
        setAuthState({
          ...defaultAuthState,
          loading: false,
          error: 'Failed to restore session',
        });
      }
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      setAuthState({
        ...authState,
        loading: true,
        error: null,
      });

      // Simple validation
      if (email.trim() === '' || password.trim() === '') {
        throw new Error('Email and password are required');
      }

      // Get registered users from localStorage
      const storedUsers = localStorage.getItem('registeredUsers');
      const registeredUsers = storedUsers ? JSON.parse(storedUsers) : [];
      
      // Find user with matching email
      const foundUser = registeredUsers.find((user: User) => user.email === email);
      
      if (!foundUser) {
        throw new Error('Invalid email or password');
      }
      
      // Verify password
      if (foundUser.password !== password) {
        throw new Error('Invalid email or password');
      }
      
      // Remove password from the user object before storing in session
      const userWithoutPassword = { ...foundUser };
      delete userWithoutPassword.password;
      
      // Store user in localStorage for session persistence
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));

      // Update auth state
      setAuthState({
        isAuthenticated: true,
        user: userWithoutPassword,
        loading: false,
        error: null,
      });

      // Navigate to dashboard
      navigate('/');
    } catch (error: any) {
      setAuthState({
        ...authState,
        isAuthenticated: false,
        user: null,
        loading: false,
        error: error.message || 'Login failed',
      });
    }
  };

  // Logout function
  const logout = () => {
    // Clear localStorage
    localStorage.removeItem('user');

    // Reset auth state
    setAuthState({
      isAuthenticated: false,
      user: null,
      loading: false,
      error: null,
    });

    // Navigate to login page
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using auth context
export const useAuth = () => useContext(AuthContext);

export default AuthContext; 