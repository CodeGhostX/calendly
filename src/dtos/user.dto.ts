import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(1, 'Name cannot be empty').max(100, 'Name '),
  email: z.email({
    message: 'Please provide a valid email address',
  }),
  slug: z.string().min(1).max(100).optional(),
});

export const updateUserSchema = createUserSchema
  .partial()
  .refine(
    (data) => Object.keys(data).length > 0,
    {
      message: "At least one field (name, email, slug) must be provided for update",
    }
  );

export type createUserDto = z.infer<typeof createUserSchema>;
export type updateUserDto = z.infer<typeof updateUserSchema>;
