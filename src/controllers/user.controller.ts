import { findUserById } from "../services/user.service.js";
import type { Request, Response } from "express";

export async function findById(req: Request, res: Response) {
  const { id } = req.params;
  const response = await findUserById(Number(id));
  res.json(response);
}