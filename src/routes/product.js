import express from 'express';
import { getProducts, getProduct, getProductsByCategory } from '../db/queries/products.js'

export const productRouter= express.Router();

// Get products
productRouter.get('/', getProducts);

// Get products by category
productRouter.get('/category', getProductsByCategory);

// Get product
productRouter.get('/:id', getProduct);

