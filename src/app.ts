/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
import httpStatus from 'http-status';
import sendResponse from './app/utils/sendResponse';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors({ origin: '*', credentials: true }));

// application routes
app.use('/api/v1', router);

const test = async (req: Request, res: Response) => {
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'This is home route',
    data: null,
  });
};

app.get('/', test);

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
