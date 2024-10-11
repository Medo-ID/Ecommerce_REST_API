import express from 'express';

export const cartRouter= express.Router();

// Get cart
cartRouter.get('/:id', (req, res) => {
    res.status(200).send('Items for cart id :' + req.params.id)
});

// Add items to cart
cartRouter.post('/:id', (req, res) => {
    res.status(200).send('Add item to cart id :' + req.params.id)
});

// Delete items from cart
cartRouter.delete('/:id', (req, res) => {
    res.status(200).send('remove item from cart id :' + req.params.id)
});

// Checkout
cartRouter.post('/:id/checkout', (req, res) => {
    res.status(200).send('ckecking out cart id :' + req.params.id)
});