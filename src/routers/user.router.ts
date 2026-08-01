import { Router } from 'express';
import UserController from '../controllers/user.controller.js';
import { validateBody } from '../middlewares/validate.js';
import { createUserSchema } from '../dtos/user.dto.js';

export const userRouter: Router = Router();

userRouter.get('/:id', UserController.findById);
userRouter.post('/', validateBody(createUserSchema), UserController.createUser)