import { Router } from 'express';
import { BikeRoutes } from '../modules/bikes/bikes.route';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { SaleRoutes } from '../modules/sales/sales.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/bikes',
    route: BikeRoutes,
  },
  {
    path: '/sales',
    route: SaleRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
