import { Router } from 'express';
import { findById } from '../controllers/user.controller.js';

export const userRouter: Router = Router();

userRouter.get('/:id', findById);