/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SaleServices } from './sales.service';

const createSale = catchAsync(async (req: any, res) => {
  const bike = req.body;
  bike.createdBy = req.user;
  const result = await SaleServices.createSale(bike);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Sold successfully',
    data: result,
  });
});

const getSaleById: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SaleServices.getSaleById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sale retrieved successfully',
    data: result,
  });
});
const getAllSale: RequestHandler = catchAsync(async (req, res) => {
  const result = await SaleServices.getAllSales();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sales retrieved successfully',
    data: result,
  });
});

const updateSale = catchAsync(async (req: any, res) => {
  const { id } = req.params;
  const bike = req.body;
  const result = await SaleServices.updateSale(id, bike);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Sale data updated successfully',
    data: result,
  });
});

const deleteSale = catchAsync(async (req: any, res) => {
  const { id } = req.params;
  const result = await SaleServices.deleteSale(id);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Sale deleted successfully',
    data: result,
  });
});
const deleteSelectedSales = catchAsync(async (req: any, res) => {
  const ids = req.body;
  const result = await SaleServices.deleteSelectedSales(ids);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Sales deleted successfully',
    data: result,
  });
});

export const SalesControllers = {
  createSale,
  getSaleById,
  getAllSale,
  updateSale,
  deleteSale,
  deleteSelectedSales,
};
