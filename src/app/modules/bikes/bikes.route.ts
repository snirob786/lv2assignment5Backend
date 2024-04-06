import express from 'express';
import { BikesControllers } from './bikes.controller';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { createBikeValidationSchema } from './bikes.validation';

const router = express.Router();

router.get('/', auth(), BikesControllers.getAllBike);
router.get('/:id', auth(), BikesControllers.getBikeById);

router.post(
  '/',
  auth(),
  validateRequest(createBikeValidationSchema),
  BikesControllers.createBike,
);

router.put('/:id', auth(), BikesControllers.updateBike);

router.delete('/:id', auth(), BikesControllers.deleteBike);
router.delete('/', auth(), BikesControllers.deleteSelectedBikes);

export const BikeRoutes = router;
