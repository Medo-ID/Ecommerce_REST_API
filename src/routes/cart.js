import express from 'express';
import { addToCart, deleteFromCart, getCart } from '../db/queries/cart.js';
import { checkout } from '../db/queries/checkout.js';

export const cartRouter= express.Router();

// Get cart
cartRouter.get('/', getCart);

// Add items to cart
cartRouter.post('/:product_id', addToCart);

// Delete items from cart
cartRouter.delete('/:product_id', deleteFromCart);

// Place order
cartRouter.post('/', checkout)