import express from 'express';
import db from '../db/queries/products.js'

export const productRouter= express.Router();

// Get products
productRouter.get('/', db.getProducts);

// Get products by category
productRouter.get('/category', db.getProductsByCategory);

// Get product
productRouter.get('/:id', db.getProduct);

