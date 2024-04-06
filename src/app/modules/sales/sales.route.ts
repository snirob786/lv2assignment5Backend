import express from 'express';
import { SalesControllers } from './sales.controller';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { createSaleValidationSchema } from './sales.validation';

const router = express.Router();

router.get('/', auth(), SalesControllers.getAllSale);
router.get('/:id', auth(), SalesControllers.getSaleById);

router.post(
  '/',
  auth(),
  validateRequest(createSaleValidationSchema),
  SalesControllers.createSale,
);

router.put('/:id', auth(), SalesControllers.updateSale);

router.delete('/:id', auth(), SalesControllers.deleteSale);
router.delete('/', auth(), SalesControllers.deleteSelectedSales);

export const SaleRoutes = router;
