import { z } from 'zod';

export const createBikeValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    price: z.number(),
    quantity: z.number(),
    brand: z.string(),
    model: z.string().optional(),
    type: z.string().optional(),
    size: z.string().optional(),
    color: z.string().optional(),
    cc: z.string().optional(),
    frameMaterial: z.string().optional(),
    suspensionsType: z.string().optional(),
  }),
});

export const bikeValidations = {
  createBikeValidationSchema: createBikeValidationSchema,
};
