import { z } from 'zod';

const registerValidationSchema = z.object({
  body: z.object({
    username: z.string({ required_error: 'Username is required.' }),
    email: z.string().email(),
    password: z.string({ required_error: 'Password is required' }),
  }),
});
const loginValidationSchema = z.object({
  body: z.object({
    username: z.string({ required_error: 'Username is required.' }),
    password: z.string({ required_error: 'Password is required' }),
  }),
});

export const AuthValidation = {
  registerValidationSchema,
  loginValidationSchema,
};
