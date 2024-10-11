import express from 'express';

export const orderRouter= express.Router();

// Get orders
orderRouter.get('/', (req, res) => {
    res.status(200).send('This is orders')
});

// Get order
orderRouter.get('/:id', (req, res) => {
    res.status(200).send('This is order: ' + req.params.id)
});