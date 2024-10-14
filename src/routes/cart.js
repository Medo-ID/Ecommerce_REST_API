import express from 'express';
import { addToCart, deleteFromCart, getCart } from '../db/queries/cart.js';

export const cartRouter= express.Router();

// Get cart
cartRouter.get('/', getCart);

// Add items to cart
cartRouter.post('/:product_id', addToCart);

// Delete items from cart
cartRouter.delete('/:product_id', deleteFromCart);