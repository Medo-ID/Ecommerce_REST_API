import express from 'express';
import { getUser, getUsers, updateUser } from '../db/queries/users.js';
import { isAuthenticated } from '../auth/auth-actions.js';

export const userRouter = express.Router();

// Get users
userRouter.get('/', getUsers);

// Get user
userRouter.get('/:id', getUser);

// Update user
userRouter.put('/:id', isAuthenticated, updateUser);