/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BikeServices } from './bikes.service';

const createBike = catchAsync(async (req: any, res) => {
  const bike = req.body;
  bike.createdBy = req.user;
  const result = await BikeServices.createBike(bike);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Bike created successfully',
    data: result,
  });
});

const getBikeById: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BikeServices.getBikeById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bikes retrieved successfully',
    data: result,
  });
});
const getAllBike: RequestHandler = catchAsync(async (req, res) => {
  const filter = req.query;
  const result = await BikeServices.getAllBikes(filter);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bikes retrieved successfully',
    data: result,
  });
});

const updateBike = catchAsync(async (req: any, res) => {
  const { id } = req.params;
  const bike = req.body;
  const result = await BikeServices.updateBike(id, bike);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Bike updated successfully',
    data: result,
  });
});

const deleteBike = catchAsync(async (req: any, res) => {
  const { id } = req.params;
  const result = await BikeServices.deleteBike(id);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Bike deleted successfully',
    data: result,
  });
});
const deleteSelectedBikes = catchAsync(async (req: any, res) => {
  const ids = req.body;
  const result = await BikeServices.deleteSelectedBikes(ids);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Bikes deleted successfully',
    data: result,
  });
});

export const BikesControllers = {
  createBike,
  getBikeById,
  getAllBike,
  updateBike,
  deleteBike,
  deleteSelectedBikes,
};
