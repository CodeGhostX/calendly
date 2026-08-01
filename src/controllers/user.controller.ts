import type { Request, Response } from 'express';
import UserService from '../services/user.service.js';
import { sendSuccess } from '../utils/api-response.js';
export default class UserController {
  static async findById(req: Request, res: Response) {
    const { id } = req.params;
    const response = await UserService.findUserById(Number(id));
    sendSuccess(res, response);
  }
  
  static async createUser(req: Request, res: Response) {
    const data = req.body;
    const response = await UserService.createUser(data);
    sendSuccess(res, response, 'User created Successfully');
  }
}