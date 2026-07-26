import type { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/api-error.js';
import { env } from '../config/env.js';

export function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof ApiError) {
    const body: Record<string, unknown> = {
      message: err.message,
      success: false,
    };
    if (err.details) body.details = err.details;
    res.status(err.statusCode).json(body);
    return;
  }

  const body: Record<string, unknown> = {
    message: 'Something went wrong',
    success: false,
  };
  if (env.NODE_ENV === 'DEVELOPMENT') body.details = err.stack;
  res.status(500).json(body);
}
