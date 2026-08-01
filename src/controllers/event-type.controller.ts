import { EventTypeService } from "../services/event-type.service.js";
import type { Request, Response } from 'express';
import { sendSuccess } from "../utils/api-response.js";

export class EventTypeController {
  static async getById(req: Request, res: Response) {
    const { id } = req.body;
    const response = await EventTypeService.getById(id);
    sendSuccess(res, response);
  }

  static async create(req: Request, res: Response) {
    const response = await EventTypeService.create(req.body);
    sendSuccess(res, response, 'Event Type Created Successfully', 201);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const response = await EventTypeService.update(Number(id), req.body);
    sendSuccess(res, response, 'Event Type updated Successfully');
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    const response = await EventTypeService.delete(Number(id));
    sendSuccess(res, response, "Event Type deleted successfully");
  }
}