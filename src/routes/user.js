import express from 'express';

export const userRouter = express.Router();

// Get users
userRouter.get('/', (req, res) => {
    res.status(200).send('This is users')
});

// Get user
userRouter.get('/:id', (req, res) => {
    res.status(200).send('This is user: ' + req.params.id)
});

// Update user
userRouter.put('/:id', (req, res) => {
    res.status(200).send('Updating user: ' + req.params.id)
});