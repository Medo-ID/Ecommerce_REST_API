import express from 'express';
import { getOrderDetails, getOrders } from '../db/queries/orders.js';

export const orderRouter= express.Router();

// Get orders
orderRouter.get('/', getOrders);

// Get order details
orderRouter.get('/:order_id', getOrderDetails);