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

export const badRequest = (message: string, details?: unknown) =>
  new ApiError(message, StatusCodes.BAD_REQUEST, details);

export const unauthorized = (message: string, details?: unknown) =>
  new ApiError(message, StatusCodes.UNAUTHORIZED, details);

export const forbidden = (message: string, details?: unknown) =>
  new ApiError(message, StatusCodes.FORBIDDEN, details);

export const notFound = (message: string, details?: unknown) =>
  new ApiError(message, StatusCodes.NOT_FOUND, details);

export const conflict = (message: string, details?: unknown) =>
  new ApiError(message, StatusCodes.CONFLICT, details);

export const unprocessableEntity = (
  message: string,
  details?: unknown
) =>
  new ApiError(
    message,
    StatusCodes.UNPROCESSABLE_ENTITY,
    details
  );

export const tooManyRequests = (
  message: string,
  details?: unknown
) =>
  new ApiError(
    message,
    StatusCodes.TOO_MANY_REQUESTS,
    details
  );

export const internalServerError = (
  message = 'Internal Server Error',
  details?: unknown
) =>
  new ApiError(
    message,
    StatusCodes.INTERNAL_SERVER_ERROR,
    details
  );

export const serviceUnavailable = (
  message = 'Service Unavailable',
  details?: unknown
) =>
  new ApiError(
    message,
    StatusCodes.SERVICE_UNAVAILABLE,
    details
  );