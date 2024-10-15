import express from 'express';
import passport from 'passport';
import bcrypt from 'bcrypt';
import { Strategy as LocalStrategy } from 'passport-local';
import { findUserByEmail, findUserById } from '../db/queries/users.js';
import { authenticateUser, logoutUser, registerUser } from '../auth/auth-actions.js';

export const authRouter = express.Router();

passport.serializeUser((user, done) => {
    done(null, user.id)
});

passport.deserializeUser(async (id, done) => {
    try{
        const user = await findUserById(id);
        return done(null, user);
    } catch (err) {
        done(err)
    }
})

// Verifying the password
export const verifyPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

// Config LocalStrategy
passport.use(new LocalStrategy(
    {usernameField: 'email'},
    async (email, password, done) => {
        try {
            const user = await findUserByEmail(email);
            if (!user) return done(null, false, {message: 'Incorrect email or password.'});
            
            const match = await verifyPassword(password, user.hash_password)
            if (!match) return done(null, false, { message: 'Incorrect email or password.' });
            
            return done(null, user)
        } catch (err) {
            return done(err);
        }
    }
))

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid input
 */
// Register
authRouter.post('/register', registerUser);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       401:
 *         description: Invalid credentials
 */
// Login
authRouter.post('/login', authenticateUser);

/**
 * @swagger
 * /auth/logout:
 *   get:
 *     summary: Logout user
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: User logged out successfully
 */
// Logout
authRouter.get('/logout', logoutUser);