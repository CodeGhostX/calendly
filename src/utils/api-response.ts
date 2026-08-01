import type { Response } from 'express';

export function sendSuccess(res: Response, data: unknown, message?: string, statusCode = 200,) {
  const body: Record<string, unknown> = {
    success: true,
    data,
  }
  if (message) body.message = message;
  res.status(statusCode).json(body);
}
