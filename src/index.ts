import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import webhookRoutes from './routes/webhooks';
import cardsRouter from './routes/cards';
import usersRouter from './routes/users';

dotenv.config();

const app = express();
const port = process.env.PORT || 4242;

// Middleware
app.use(cors());

app.use('/webhooks', express.raw({ type: 'application/json' }));

// Regular body parsing for all other routes
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Virtual Card API is running',
    endpoints: {
      health: '/health',
      webhooks: '/webhooks/stripe'
    }
  });
});

// Routes
app.use('/webhooks', webhookRoutes);
app.use('/api', cardsRouter);
app.use('/api/users', usersRouter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Health check: http://localhost:${port}/health`);
  console.log(`Webhook endpoint: http://localhost:${port}/webhooks/stripe`);
}); 