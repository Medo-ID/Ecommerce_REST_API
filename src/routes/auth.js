import express from 'express';

export const authRouter= express.Router();

// Register
authRouter.post('/register', (req, res) => {
    res.status(200).send('This is register')
});

// Login
authRouter.post('/login', (req, res) => {
    res.status(200).send('This is login')
});

// Logout
authRouter.get('/logout', (req, res) => {
    res.status(200).send('This is logout')
});