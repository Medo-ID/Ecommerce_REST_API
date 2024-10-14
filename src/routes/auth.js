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

// Register
authRouter.post('/register', registerUser);

// Login
authRouter.post('/login', authenticateUser);

// Logout
authRouter.get('/logout', logoutUser);