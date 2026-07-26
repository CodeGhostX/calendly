import { StatusCodes } from 'http-status-codes';

export class ApiError extends Error {
  readonly statusCode: number;
  readonly details?: unknown;
  constructor(message: string, statusCode: number, details?: unknown) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    this.name = 'ApiError';
    Error.captureStackTrace(this, this.constructor);
  }
}

export const notFound = (message: string, details?: unknown) =>
  new ApiError(message, StatusCodes.NOT_FOUND, details);
