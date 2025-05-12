import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Chip,
  Grid,
  CircularProgress,
  Alert,
  Divider,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  SelectChangeEvent,
  Checkbox,
  FormControlLabel,
  Snackbar,
  Tooltip,
  Autocomplete,
  OutlinedInput
} from '@mui/material';
import { AutocompleteRenderInputParams } from '@mui/material/Autocomplete';
import { Delete as DeleteIcon, ContentCopy as CopyIcon, Refresh as RefreshIcon } from '@mui/icons-material';

import { CardDetails as CardDetailsType, Rule, RuleType, SpendInterval } from '../types';
import { 
  getCardDetails, 
  freezeCard, 
  createRule, 
  deleteRule, 
  getCardTestCredentials,
  getCardBalance 
} from '../services/api';
import { MCC_CATEGORIES, MCCCode, ALL_MCC_CODES } from '../utils/mccCodes';

const formatAmount = (amount: number, currency: string) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase()
  }).format(amount / 100);
};

const formatRuleDescription = (rule: Rule) => {
  switch (rule.type) {
    case RuleType.SPEND_LIMIT:
      return `Spend limit: ${rule.spendLimitCents ? formatAmount(rule.spendLimitCents, 'usd') : 'N/A'} (${rule.spendInterval})`;
    case RuleType.MERCHANT_CATEGORY:
      let desc = 'Merchant/Category: ';
      if (rule.merchantAllowList) desc += `Allow merchants: ${rule.merchantAllowList}. `;
      if (rule.merchantBlockList) desc += `Block merchants: ${rule.merchantBlockList}. `;
      if (rule.categoryAllowList) desc += `Allow categories: ${rule.categoryAllowList}. `;
      if (rule.categoryBlockList) desc += `Block categories: ${rule.categoryBlockList}. `;
      return desc;
    case RuleType.TIME_WINDOW:
      return `Time window: ${rule.allowedWeekdays || 'Any day'}, ${rule.allowedHourStart !== null ? `${rule.allowedHourStart}:00` : '00:00'} - ${rule.allowedHourEnd !== null ? `${rule.allowedHourEnd}:00` : '23:59'}`;
    default:
      return 'Unknown rule type';
  }
};

// Define card balance types
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

const CardDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [card, setCard] = useState<CardDetailsType | null>(null);
  const [cardBalance, setCardBalance] = useState<CardBalance | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [freezeLoading, setFreezeLoading] = useState<boolean>(false);
  
  // New Rule Dialog
  const [openRuleDialog, setOpenRuleDialog] = useState<boolean>(false);
  const [ruleType, setRuleType] = useState<RuleType>(RuleType.SPEND_LIMIT);
  const [spendLimit, setSpendLimit] = useState<string>('');
  const [spendInterval, setSpendInterval] = useState<SpendInterval>(SpendInterval.LIFETIME);
  const [spendLimitError, setSpendLimitError] = useState<string | null>(null);
  
  // Merchant/category rule states (modified to handle arrays for dropdowns)
  const [merchantAllowList, setMerchantAllowList] = useState<string>('');
  const [merchantBlockList, setMerchantBlockList] = useState<string>('');
  const [categoryAllowList, setCategoryAllowList] = useState<string>('');
  const [categoryBlockList, setCategoryBlockList] = useState<string>('');
  
  // New state for dropdown selections
  const [selectedMerchantAllowList, setSelectedMerchantAllowList] = useState<string[]>([]);
  const [selectedMerchantBlockList, setSelectedMerchantBlockList] = useState<string[]>([]);
  const [selectedCategoryAllowList, setSelectedCategoryAllowList] = useState<string[]>([]);
  const [selectedCategoryBlockList, setSelectedCategoryBlockList] = useState<string[]>([]);
  
  // Time window rule states
  const [allowedWeekdays, setAllowedWeekdays] = useState<string[]>([]);
  const [allowedHourStart, setAllowedHourStart] = useState<string>('9');
  const [allowedHourEnd, setAllowedHourEnd] = useState<string>('17');
  
  const [ruleLoading, setRuleLoading] = useState<boolean>(false);
  
  // Weekday options for checkbox selection
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  // Common merchants - would normally come from API, but for demo we'll hardcode some
  const commonMerchants = [
    { id: "merch_amazon", name: "Amazon" },
    { id: "merch_walmart", name: "Walmart" },
    { id: "merch_target", name: "Target" },
    { id: "merch_uber", name: "Uber" },
    { id: "merch_lyft", name: "Lyft" },
    { id: "merch_starbucks", name: "Starbucks" },
    { id: "merch_mcdonalds", name: "McDonalds" },
    { id: "merch_netflix", name: "Netflix" },
    { id: "merch_spotify", name: "Spotify" },
    { id: "merch_apple", name: "Apple" },
    { id: "merch_google", name: "Google" },
    { id: "merch_microsoft", name: "Microsoft" },
    { id: "merch_airbnb", name: "Airbnb" },
    { id: "merch_doordash", name: "DoorDash" },
    { id: "merch_instacart", name: "Instacart" }
  ];
  
  // Helper function to handle weekday checkbox changes
  const handleWeekdayToggle = (day: string) => {
    setAllowedWeekdays(prev => 
      prev.includes(day) 
        ? prev.filter(d => d !== day) 
        : [...prev, day]
    );
  };
  
  // Copy to clipboard states
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  
  // Test credentials state
  const [showTestCredentials, setShowTestCredentials] = useState<boolean>(false);
  const [testCredentials, setTestCredentials] = useState<any>(null);
  const [loadingCredentials, setLoadingCredentials] = useState<boolean>(false);
  
  useEffect(() => {
    const fetchCard = async () => {
      try {
        if (!id) return;
        const cardData = await getCardDetails(id);
        setCard(cardData);
        
        // Fetch card balance
        try {
          const balanceData = await getCardBalance(id);
          setCardBalance(balanceData);
        } catch (balanceErr: any) {
          console.error('Error fetching card balance:', balanceErr);
          // Don't set main error, just log it
        }
      } catch (err: any) {
        setError(err.response?.data?.error || err.message || 'Failed to fetch card details');
      } finally {
        setLoading(false);
      }
    };
    
    fetchCard();
  }, [id]);
  
  const handleFreezeToggle = async () => {
    if (!card) return;
    setFreezeLoading(true);
    
    try {
      const updatedCard = await freezeCard(card.id, card.status === 'active');
      setCard({ ...card, status: updatedCard.status });
    } catch (err: any) {
      setError(err.response?.data?.error || err.message || 'Failed to update card status');
    } finally {
      setFreezeLoading(false);
    }
  };
  
  // Handle selection changes
  const handleMerchantAllowChange = (event: React.SyntheticEvent, newValue: string[]) => {
    setSelectedMerchantAllowList(newValue);
    setMerchantAllowList(newValue.join(','));
  };

  const handleMerchantBlockChange = (event: React.SyntheticEvent, newValue: string[]) => {
    setSelectedMerchantBlockList(newValue);
    setMerchantBlockList(newValue.join(','));
  };

  const handleCategoryAllowChange = (event: React.SyntheticEvent, newValue: string[]) => {
    setSelectedCategoryAllowList(newValue);
    setCategoryAllowList(newValue.join(','));
  };

  const handleCategoryBlockChange = (event: React.SyntheticEvent, newValue: string[]) => {
    setSelectedCategoryBlockList(newValue);
    setCategoryBlockList(newValue.join(','));
  };
  
  const handleAddRule = async () => {
    if (!card) return;
    setRuleLoading(true);
    
    try {
      let newRule: any = {
        cardId: card.id,
        type: ruleType,
      };
      
      // Add appropriate fields based on rule type
      if (ruleType === RuleType.SPEND_LIMIT) {
        const newLimitCents = Math.floor(parseFloat(spendLimit) * 100);
        
        // If there's a validation error, don't proceed
        if (spendLimitError) {
          setRuleLoading(false);
          return;
        }
        
        newRule.spendLimitCents = newLimitCents;
        newRule.spendInterval = spendInterval;
      } else if (ruleType === RuleType.MERCHANT_CATEGORY) {
        if (merchantAllowList) newRule.merchantAllowList = merchantAllowList;
        if (merchantBlockList) newRule.merchantBlockList = merchantBlockList;
        if (categoryAllowList) newRule.categoryAllowList = categoryAllowList;
        if (categoryBlockList) newRule.categoryBlockList = categoryBlockList;
      } else if (ruleType === RuleType.TIME_WINDOW) {
        newRule.allowedWeekdays = allowedWeekdays.join(',');
        newRule.allowedHourStart = parseInt(allowedHourStart, 10);
        newRule.allowedHourEnd = parseInt(allowedHourEnd, 10);
      }
      
      const createdRule = await createRule(newRule);
      setCard({
        ...card,
        rules: [...card.rules, createdRule]
      });
      
      // If we added a spending limit rule, refresh the card balance to reflect changes
      // Note: There may be a delay before Stripe's API shows the updated limits
      if (ruleType === RuleType.SPEND_LIMIT) {
        await refreshCardBalance();
        
        // If it's a lifetime limit, update our UI immediately even if Stripe hasn't updated yet
        if (spendInterval === SpendInterval.LIFETIME && cardBalance) {
          const newCardBalance = { ...cardBalance };
          const limitIndex = newCardBalance.spendingLimits.findIndex(l => l.interval === 'all_time');
          const newLimit = newRule.spendLimitCents / 100;
          
          if (limitIndex >= 0) {
            // Update existing limit
            const spent = newCardBalance.spendingLimits[limitIndex].spent;
            newCardBalance.spendingLimits[limitIndex] = {
              ...newCardBalance.spendingLimits[limitIndex],
              totalLimit: newLimit,
              remaining: newLimit - spent
            };
          } else {
            // Add new limit
            newCardBalance.spendingLimits.push({
              interval: 'all_time',
              totalLimit: newLimit,
              spent: 0,
              remaining: newLimit
            });
          }
          
          setCardBalance(newCardBalance);
        }
      }
      
      // Reset form
      setOpenRuleDialog(false);
      setRuleType(RuleType.SPEND_LIMIT);
      setSpendLimit('');
      setSpendInterval(SpendInterval.LIFETIME);
      setSpendLimitError(null);
      setMerchantAllowList('');
      setMerchantBlockList('');
      setCategoryAllowList('');
      setCategoryBlockList('');
      setSelectedMerchantAllowList([]);
      setSelectedMerchantBlockList([]);
      setSelectedCategoryAllowList([]);
      setSelectedCategoryBlockList([]);
      setAllowedWeekdays([]);
      setAllowedHourStart('9');
      setAllowedHourEnd('17');
    } catch (err: any) {
      setError(err.response?.data?.error || err.message || 'Failed to add rule');
    } finally {
      setRuleLoading(false);
    }
  };
  
  const handleDeleteRule = async (ruleId: string) => {
    if (!card) return;
    
    try {
      // Find the rule to determine if it was a spending limit rule
      const ruleToDelete = card.rules.find(r => r.id === ruleId);
      await deleteRule(ruleId);
      
      setCard({
        ...card,
        rules: card.rules.filter(r => r.id !== ruleId)
      });
      
      // Refresh card balance if we deleted a spending limit rule
      if (ruleToDelete?.type === RuleType.SPEND_LIMIT) {
        await refreshCardBalance();
      }
    } catch (err: any) {
      setError(err.response?.data?.error || err.message || 'Failed to delete rule');
    }
  };
  
  // Copy card details to clipboard
  const copyToClipboard = (text: string, description: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setSnackbarMessage(`${description} copied to clipboard`);
        setSnackbarOpen(true);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };
  
  // Close snackbar
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  
  // Get test credentials for the card
  const handleGetTestCredentials = async () => {
    if (!card) return;
    
    try {
      setLoadingCredentials(true);
      const credentials = await getCardTestCredentials(card.id);
      setTestCredentials(credentials);
      setShowTestCredentials(true);
    } catch (err: any) {
      setError(err.response?.data?.error || err.message || 'Failed to get test credentials');
    } finally {
      setLoadingCredentials(false);
    }
  };
  
  // Refresh card balance 
  const refreshCardBalance = async () => {
    if (!card) return;
    
    try {
      const balanceData = await getCardBalance(card.id);
      setCardBalance(balanceData);
    } catch (err: any) {
      console.error('Error refreshing card balance:', err);
      // Don't set main error, just log it
    }
  };
  
  // Add this render function for the balance display
  const renderCardBalance = () => {
    if (!cardBalance) return null;
    
    // Calculate any custom spend limits based on rules that may not be reflected in Stripe yet
    const lifetimeRule = card?.rules.find(
      rule => rule.type === RuleType.SPEND_LIMIT && rule.spendInterval === SpendInterval.LIFETIME
    );
    
    const spendingLimits = [...cardBalance.spendingLimits];
    
    // If we have a lifetime rule and no corresponding limit in cardBalance, add it
    if (lifetimeRule?.spendLimitCents) {
      const lifetimeLimitInCardBalance = spendingLimits.findIndex(limit => limit.interval === 'all_time');
      const limitAmount = lifetimeRule.spendLimitCents / 100;
      
      if (lifetimeLimitInCardBalance >= 0) {
        // Update existing limit if different
        if (spendingLimits[lifetimeLimitInCardBalance].totalLimit !== limitAmount) {
          spendingLimits[lifetimeLimitInCardBalance] = {
            ...spendingLimits[lifetimeLimitInCardBalance],
            totalLimit: limitAmount,
            remaining: limitAmount - spendingLimits[lifetimeLimitInCardBalance].spent
          };
        }
      } else {
        // Add new limit if not found
        spendingLimits.push({
          interval: 'all_time',
          totalLimit: limitAmount,
          spent: 0,
          remaining: limitAmount
        });
      }
    }
    
    return (
      <Card sx={{ mb: 3, bgcolor: 'background.default' }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">
              Card Balance
            </Typography>
            <Button 
              size="small" 
              startIcon={<RefreshIcon />} 
              onClick={refreshCardBalance}
            >
              Refresh
            </Button>
          </Box>
          
          {spendingLimits.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              No spending limits defined
            </Typography>
          ) : (
            <Grid container spacing={2}>
              {spendingLimits.map((limit, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Paper elevation={1} sx={{ p: 2 }}>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      {limit.interval === 'all_time' ? 'Lifetime' : 
                       limit.interval === 'per_day' ? 'Daily' : 
                       limit.interval === 'per_month' ? 'Monthly' : limit.interval} Limit
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 1 }}>
                      <Typography variant="h5" color={limit.remaining > 0 ? 'success.main' : 'error.main'} fontWeight="bold">
                        ${limit.remaining.toFixed(2)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                        remaining
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body2" color="text.secondary">
                        ${limit.spent.toFixed(2)} spent
                      </Typography>
                      <Typography variant="body2">
                        of ${limit.totalLimit.toFixed(2)}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          )}
        </CardContent>
      </Card>
    );
  };
  
  const getLifetimeLimit = (): number => {
    // Find existing lifetime limit in rules
    const lifetimeRule = card?.rules.find(
      rule => rule.type === RuleType.SPEND_LIMIT && rule.spendInterval === SpendInterval.LIFETIME
    );
    
    // If lifetime limit exists in rules, use that
    if (lifetimeRule?.spendLimitCents) {
      return lifetimeRule.spendLimitCents;
    }
    
    // Otherwise check card balance
    if (cardBalance) {
      const lifetimeLimit = cardBalance.spendingLimits.find(limit => limit.interval === 'all_time');
      if (lifetimeLimit) {
        return lifetimeLimit.totalLimit * 100; // Convert to cents
      }
    }
    
    // Default to no limit
    return 0;
  };

  const validateSpendLimit = (value: string) => {
    if (!value) {
      setSpendLimitError(null);
      return;
    }
    
    const newLimit = parseFloat(value);
    if (isNaN(newLimit) || newLimit <= 0) {
      setSpendLimitError('Spend limit must be a positive number');
      return;
    }
    
    // Only validate interval-specific limits if this is not a lifetime limit being set
    if (spendInterval !== SpendInterval.LIFETIME) {
      const lifetimeLimit = getLifetimeLimit();
      
      // If there's a lifetime limit and the new limit exceeds it
      if (lifetimeLimit > 0 && newLimit * 100 > lifetimeLimit) {
        setSpendLimitError(`Cannot exceed lifetime limit of ${formatAmount(lifetimeLimit, 'usd')}`);
        return;
      }
    }
    
    setSpendLimitError(null);
  };
  
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
  
  if (!card) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h6">Card not found</Typography>
        <Button variant="contained" onClick={() => navigate('/')}>
          Back to Dashboard
        </Button>
      </Box>
    );
  }
  
  return (
    <Box>
      <Button variant="outlined" onClick={() => navigate('/')} sx={{ mb: 3 }}>
        Back to Dashboard
      </Button>
      
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h5">
                {card.last4 ? `**** **** **** ${card.last4}` : '**** **** **** 4242'}
              </Typography>
              <Tooltip title="Copy card number">
                <IconButton 
                  size="small" 
                  onClick={() => copyToClipboard(card.stripeId, "Card ID")}
                  sx={{ ml: 1 }}
                >
                  <CopyIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
            <Chip 
              label={card.status} 
              color={card.status === 'active' ? 'success' : 'default'} 
            />
          </Box>
          
          <Box sx={{ 
            p: 2, 
            border: '1px solid #eee', 
            borderRadius: 1, 
            mb: 3, 
            bgcolor: 'background.paper'
          }}>
            <Typography variant="h6" color="primary" gutterBottom>
              Card Usage Information
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Card ID:
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body1">
                    {card.id}
                  </Typography>
                  <IconButton 
                    size="small" 
                    onClick={() => copyToClipboard(card.id, "Card ID")}
                    sx={{ ml: 0.5 }}
                  >
                    <CopyIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Stripe ID:
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body1">
                    {card.stripeId}
                  </Typography>
                  <IconButton 
                    size="small" 
                    onClick={() => copyToClipboard(card.stripeId, "Stripe ID")}
                    sx={{ ml: 0.5 }}
                  >
                    <CopyIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Cardholder ID:
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body1">
                    {card.cardholderId}
                  </Typography>
                  <IconButton 
                    size="small" 
                    onClick={() => copyToClipboard(card.cardholderId, "Cardholder ID")}
                    sx={{ ml: 0.5 }}
                  >
                    <CopyIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Description:
                </Typography>
                <Typography variant="body1">
                  {card.description || 'No description'}
                </Typography>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Created:
                </Typography>
                <Typography variant="body1">
                  {new Date(card.createdAt).toLocaleString()}
                </Typography>
              </Grid>
              
              <Grid item xs={12}>
                {!showTestCredentials ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleGetTestCredentials}
                    disabled={loadingCredentials || card.status !== 'active'}
                    sx={{ mt: 2 }}
                  >
                    {loadingCredentials ? <CircularProgress size={24} /> : 'Get Test Credentials'}
                  </Button>
                ) : testCredentials ? (
                  <Box sx={{ mt: 2, p: 2, border: '1px dashed #6772e5', borderRadius: 1 }}>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      Test Card Credentials
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="body2" color="text.secondary">Card Number:</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Typography variant="body1">{testCredentials.number}</Typography>
                          <IconButton 
                            size="small" 
                            onClick={() => copyToClipboard(testCredentials.number, "Card number")}
                            sx={{ ml: 0.5 }}
                          >
                            <CopyIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <Typography variant="body2" color="text.secondary">CVC:</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Typography variant="body1">{testCredentials.cvc}</Typography>
                          <IconButton 
                            size="small" 
                            onClick={() => copyToClipboard(testCredentials.cvc, "CVC")}
                            sx={{ ml: 0.5 }}
                          >
                            <CopyIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <Typography variant="body2" color="text.secondary">Expiration:</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Typography variant="body1">
                            {testCredentials.expMonth}/{testCredentials.expYear}
                          </Typography>
                          <IconButton 
                            size="small" 
                            onClick={() => copyToClipboard(`${testCredentials.expMonth}/${testCredentials.expYear}`, "Expiration date")}
                            sx={{ ml: 0.5 }}
                          >
                            <CopyIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Alert severity="warning">
                          These are test credentials. In a production environment, this would be actual card details.
                          You can use these details to simulate transactions with Stripe's test payment forms.
                        </Alert>
                      </Grid>
                    </Grid>
                  </Box>
                ) : (
                  <Alert severity="error" sx={{ mt: 2 }}>
                    Failed to load test credentials. Make sure the card is active.
                  </Alert>
                )}
              </Grid>
            </Grid>
          </Box>
          
          <Box sx={{ mt: 2 }}>
            <Button 
              variant="contained" 
              color={card.status === 'active' ? 'error' : 'success'}
              onClick={handleFreezeToggle}
              disabled={freezeLoading}
            >
              {freezeLoading ? <CircularProgress size={24} /> : (card.status === 'active' ? 'Freeze Card' : 'Unfreeze Card')}
            </Button>
          </Box>
        </CardContent>
      </Card>
      
      {/* Card Balance Section - Add this section */}
      {renderCardBalance()}
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Card Rules
          </Typography>
          
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="subtitle1">
                  Active Rules ({card.rules.length})
                </Typography>
                <Button 
                  variant="contained" 
                  size="small"
                  onClick={() => setOpenRuleDialog(true)}
                >
                  Add Rule
                </Button>
              </Box>
              
              {card.rules.length === 0 ? (
                <Typography variant="body2" color="text.secondary">
                  No rules configured yet
                </Typography>
              ) : (
                <List>
                  {card.rules.map((rule) => (
                    <ListItem 
                      key={rule.id}
                      secondaryAction={
                        <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteRule(rule.id)}>
                          <DeleteIcon />
                        </IconButton>
                      }
                    >
                      <ListItemText 
                        primary={rule.type}
                        secondary={formatRuleDescription(rule)}
                      />
                    </ListItem>
                  ))}
                </List>
              )}
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Recent Transactions
          </Typography>
          
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Merchant</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Decision</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {card.authorizations.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} align="center">
                      No transactions yet
                    </TableCell>
                  </TableRow>
                ) : (
                  card.authorizations.map((auth) => (
                    <TableRow key={auth.id}>
                      <TableCell>{new Date(auth.createdAt).toLocaleString()}</TableCell>
                      <TableCell>{auth.merchant}</TableCell>
                      <TableCell>{formatAmount(auth.amountCents, auth.currency)}</TableCell>
                      <TableCell>
                        <Chip 
                          label={auth.decision} 
                          color={
                            auth.decision === 'APPROVED' ? 'success' : 
                            auth.decision === 'DECLINED' ? 'error' : 'warning'
                          }
                          size="small"
                        />
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      
      {/* Add Rule Dialog */}
      <Dialog open={openRuleDialog} onClose={() => setOpenRuleDialog(false)}>
        <DialogTitle>Add New Rule</DialogTitle>
        <DialogContent>
          <Box sx={{ mb: 3, mt: 1 }}>
            <FormControl fullWidth>
              <InputLabel>Rule Type</InputLabel>
              <Select
                value={ruleType}
                label="Rule Type"
                onChange={(e: any) => setRuleType(e.target.value as RuleType)}
              >
                <MenuItem value={RuleType.SPEND_LIMIT}>Spend Limit</MenuItem>
                <MenuItem value={RuleType.MERCHANT_CATEGORY}>Merchant/Category</MenuItem>
                <MenuItem value={RuleType.TIME_WINDOW}>Time Window</MenuItem>
              </Select>
            </FormControl>
          </Box>
          
          {ruleType === RuleType.SPEND_LIMIT && (
            <>
              <Box sx={{ mb: 3 }}>
                <TextField
                  label="Spend Limit ($)"
                  value={spendLimit}
                  onChange={(e: any) => {
                    setSpendLimit(e.target.value);
                    validateSpendLimit(e.target.value);
                  }}
                  fullWidth
                  type="number"
                  required
                  error={!!spendLimitError}
                  helperText={spendLimitError}
                />
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <FormControl fullWidth>
                  <InputLabel>Interval</InputLabel>
                  <Select
                    value={spendInterval}
                    label="Interval"
                    onChange={(e: any) => {
                      setSpendInterval(e.target.value as SpendInterval);
                      validateSpendLimit(spendLimit);
                    }}
                  >
                    <MenuItem value={SpendInterval.DAILY}>Daily</MenuItem>
                    <MenuItem value={SpendInterval.MONTHLY}>Monthly</MenuItem>
                    <MenuItem value={SpendInterval.LIFETIME}>Lifetime</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </>
          )}
          
          {ruleType === RuleType.MERCHANT_CATEGORY && (
            <>
              <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
                Configure merchant and category lists
              </Typography>
              
              <Box sx={{ mb: 2 }}>
                <Autocomplete
                  multiple
                  id="merchant-allow-list"
                  options={commonMerchants.map(m => m.id)}
                  getOptionLabel={(option: string) => commonMerchants.find(m => m.id === option)?.name || option}
                  value={selectedMerchantAllowList}
                  onChange={handleMerchantAllowChange}
                  renderInput={(params: AutocompleteRenderInputParams) => (
                    <TextField
                      {...params}
                      label="Merchant Allow List"
                      helperText="Only these merchants will be approved (leave empty for no restriction)"
                    />
                  )}
                  freeSolo
                />
              </Box>
              
              <Box sx={{ mb: 2 }}>
                <Autocomplete
                  multiple
                  id="merchant-block-list"
                  options={commonMerchants.map(m => m.id)}
                  getOptionLabel={(option: string) => commonMerchants.find(m => m.id === option)?.name || option}
                  value={selectedMerchantBlockList}
                  onChange={handleMerchantBlockChange}
                  renderInput={(params: AutocompleteRenderInputParams) => (
                    <TextField
                      {...params}
                      label="Merchant Block List"
                      helperText="These merchants will be declined (takes precedence over allow list)"
                    />
                  )}
                  freeSolo
                />
              </Box>
              
              <Box sx={{ mb: 2 }}>
                <Autocomplete
                  multiple
                  id="category-allow-list"
                  options={ALL_MCC_CODES.map(mcc => mcc.code)}
                  getOptionLabel={(option: string) => {
                    const mcc = ALL_MCC_CODES.find(m => m.code === option);
                    return mcc ? `${mcc.description} (${mcc.code})` : option;
                  }}
                  groupBy={(option: string) => {
                    const mcc = ALL_MCC_CODES.find(m => m.code === option);
                    return mcc ? mcc.category : '';
                  }}
                  value={selectedCategoryAllowList}
                  onChange={handleCategoryAllowChange}
                  renderInput={(params: AutocompleteRenderInputParams) => (
                    <TextField
                      {...params}
                      label="Category Allow List"
                      helperText="Only these MCC codes will be approved (leave empty for no restriction)"
                    />
                  )}
                />
              </Box>
              
              <Box sx={{ mb: 2 }}>
                <Autocomplete
                  multiple
                  id="category-block-list"
                  options={ALL_MCC_CODES.map(mcc => mcc.code)}
                  getOptionLabel={(option: string) => {
                    const mcc = ALL_MCC_CODES.find(m => m.code === option);
                    return mcc ? `${mcc.description} (${mcc.code})` : option;
                  }}
                  groupBy={(option: string) => {
                    const mcc = ALL_MCC_CODES.find(m => m.code === option);
                    return mcc ? mcc.category : '';
                  }}
                  value={selectedCategoryBlockList}
                  onChange={handleCategoryBlockChange}
                  renderInput={(params: AutocompleteRenderInputParams) => (
                    <TextField
                      {...params}
                      label="Category Block List"
                      helperText="These MCC codes will be declined (takes precedence over allow list)"
                    />
                  )}
                />
              </Box>
            </>
          )}
          
          {ruleType === RuleType.TIME_WINDOW && (
            <>
              <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
                Configure allowed time windows
              </Typography>
              
              <Box sx={{ mb: 2 }}>
                <FormControl component="fieldset">
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Allowed Days of Week:
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    {weekdays.map(day => (
                      <FormControlLabel
                        key={day}
                        control={
                          <Checkbox
                            checked={allowedWeekdays.includes(day)}
                            onChange={() => handleWeekdayToggle(day)}
                          />
                        }
                        label={day}
                      />
                    ))}
                  </Box>
                </FormControl>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <TextField
                  label="Hour Start (0-23)"
                  value={allowedHourStart}
                  onChange={(e: any) => setAllowedHourStart(e.target.value)}
                  type="number"
                  InputProps={{ inputProps: { min: 0, max: 23 } }}
                  sx={{ flex: 1 }}
                />
                <TextField
                  label="Hour End (0-23)"
                  value={allowedHourEnd}
                  onChange={(e: any) => setAllowedHourEnd(e.target.value)}
                  type="number"
                  InputProps={{ inputProps: { min: 0, max: 23 } }}
                  sx={{ flex: 1 }}
                />
              </Box>
              
              <Alert severity="info">
                <Typography variant="body2">
                  Hours are in 24-hour format (0-23).<br/>
                  If no days are selected, all days will be allowed.
                </Typography>
              </Alert>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenRuleDialog(false)}>Cancel</Button>
          <Button 
            onClick={handleAddRule} 
            disabled={
              ruleLoading || 
              (ruleType === RuleType.SPEND_LIMIT && (!spendLimit || !!spendLimitError)) || 
              (ruleType === RuleType.MERCHANT_CATEGORY && 
                !merchantAllowList && !merchantBlockList && 
                !categoryAllowList && !categoryBlockList) ||
              (ruleType === RuleType.TIME_WINDOW &&
                (allowedHourStart === '' || allowedHourEnd === ''))
            }
            variant="contained"
          >
            {ruleLoading ? <CircularProgress size={24} /> : 'Add Rule'}
          </Button>
        </DialogActions>
      </Dialog>
      
      {/* Snackbar for copy notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </Box>
  );
};

export default CardDetails; 