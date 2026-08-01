import type { ZodSchema } from 'zod';
import type { Request, Response, NextFunction } from 'express';
import { badRequest } from '../utils/api-error.js';

export const validateBody =
  (schema: ZodSchema) => (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      throw badRequest('Validation failed', result.error.issues);
    }
    // helps in trimming or when we change data
    req.body = result.data;
    next();
  };
