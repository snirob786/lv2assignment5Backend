import { z } from 'zod';

export const createSaleValidationSchema = z.object({
  body: z.object({
    buyerName: z.string(),
    quantity: z.number(),
    bikeID: z.string(),
  }),
});

export const saleValidations = {
  createSaleValidationSchema: createSaleValidationSchema,
};
