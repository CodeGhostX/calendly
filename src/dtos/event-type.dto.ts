import { z } from 'zod';

export const eventTypeCreateSchema = z.object({
  hostId: z
    .number({
      error: 'Host ID is required',
    })
    .int('Host ID must be an integer')
    .positive('Host ID must be a positive number'),

  durationMinutes: z
    .number({
      error: 'Duration is required',
    })
    .int('Duration must be a whole number')
    .min(1, 'Duration must be at least 1 minute')
    .max(240, 'Duration cannot exceed 240 minutes'),

  title: z
    .string()
    .trim()
    .min(1, 'Title cannot be empty')
    .max(100, 'Title cannot exceed 100 characters'),

  description: z.string().trim().max(1000, 'Description cannot exceed 1000 characters').optional(),

  slug: z
    .string()
    .min(1)
    .max(100)
    .regex(/^[a-z0-9-]+$/, 'Slug may only contain lowercase letters, numbers, and hyphens')
    .optional(),

  isActive: z
    .boolean({
      error: 'isActive must be a boolean value',
    })
    .default(true),

  locationType: z
    .enum(['online', 'in_person', 'phone'], {
      error: 'Location type must be one of: online, in_person, phone',
    })
    .default('online'),

  locationValue: z
    .string()
    .trim()
    .max(255, 'Location value cannot exceed 255 characters')
    .optional(),

  bufferBeforeMinutes: z
    .number({
      error: 'Buffer before duration must be a number',
    })
    .int('Buffer before duration must be a whole number')
    .min(0, 'Buffer before duration cannot be negative')
    .max(1440, 'Buffer before duration cannot exceed 1440 minutes')
    .default(0),

  bufferAfterMinutes: z
    .number({
      error: 'Buffer after duration must be a number',
    })
    .int('Buffer after duration must be a whole number')
    .min(0, 'Buffer after duration cannot be negative')
    .max(1440, 'Buffer after duration cannot exceed 1440 minutes')
    .default(0),
});

export const eventTypeUpdateSchema = eventTypeCreateSchema
  .partial()
  .refine((data) => Object.keys(data).length > 0, {
    message: 'At least one field must be provided for update',
  });

export type eventTypeCreateDto = z.infer<typeof eventTypeCreateSchema>;
export type eventTypeUpdateDto = z.infer<typeof eventTypeUpdateSchema>;
