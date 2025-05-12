"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const webhooks_1 = __importDefault(require("./routes/webhooks"));
const cards_1 = __importDefault(require("./routes/cards"));
const users_1 = __importDefault(require("./routes/users"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 4242;
// Middleware
app.use((0, cors_1.default)());
app.use('/webhooks', express_1.default.raw({ type: 'application/json' }));
// Regular body parsing for all other routes
app.use(body_parser_1.default.json());
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
app.use('/webhooks', webhooks_1.default);
app.use('/api', cards_1.default);
app.use('/api/users', users_1.default);
// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});
// Error handling middleware
app.use((err, req, res, next) => {
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
