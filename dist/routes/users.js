"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = require("../generated/prisma");
const stripeAdapter_1 = require("../services/stripeAdapter");
const prisma = new prisma_1.PrismaClient();
const router = express_1.default.Router();
// POST /users/register - Create a new user account with cardholder ID validation
router.post('/register', async (req, res) => {
    try {
        const { username, email, password, cardholderId } = req.body;
        // Validate required fields
        if (!username || !email || !password || !cardholderId) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        // Validate cardholder ID format
        if (!cardholderId.startsWith('ich_')) {
            return res.status(400).json({ error: 'Invalid cardholder ID format. Must start with "ich_"' });
        }
        // Check if email already exists
        const existingEmail = await prisma.user.findUnique({
            where: { email }
        });
        if (existingEmail) {
            return res.status(409).json({ error: 'Email is already registered' });
        }
        // Check if cardholder ID already exists
        const existingCardholder = await prisma.user.findUnique({
            where: { cardholderId }
        });
        if (existingCardholder) {
            return res.status(409).json({ error: 'This cardholder ID is already associated with an account' });
        }
        // Verify cardholder ID exists in Stripe
        try {
            await (0, stripeAdapter_1.getCardholderDetails)(cardholderId);
        }
        catch (stripeError) {
            return res.status(400).json({ error: 'Invalid cardholder ID. Could not verify with Stripe.' });
        }
        // Create user in database
        // In a real app, you would hash the password before storing
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password, // NOTE: In production, hash this password!
                cardholderId,
                name: username
            }
        });
        // Don't return the password in the response
        const { password: _, ...userWithoutPassword } = newUser;
        res.status(201).json(userWithoutPassword);
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'Failed to register user' });
    }
});
// POST /users/login - Authenticate a user
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        // Validate input
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }
        // Find user by email
        const user = await prisma.user.findUnique({
            where: { email }
        });
        // If user not found or password doesn't match
        if (!user || user.password !== password) { // In production, use proper password verification
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        // Don't return the password in the response
        const { password: _, ...userWithoutPassword } = user;
        res.json(userWithoutPassword);
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'Login failed' });
    }
});
// GET /users/check-cardholder/:id - Check if a cardholder ID is already registered
router.get('/check-cardholder/:id', async (req, res) => {
    try {
        const cardholderId = req.params.id;
        // Check if cardholder ID exists in our database
        const existingUser = await prisma.user.findUnique({
            where: { cardholderId }
        });
        res.json({
            available: !existingUser,
            message: existingUser ? 'Cardholder ID is already registered' : 'Cardholder ID is available'
        });
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'Failed to check cardholder ID' });
    }
});
exports.default = router;
