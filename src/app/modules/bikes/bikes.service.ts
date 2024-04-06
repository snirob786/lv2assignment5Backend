/* eslint-disable @typescript-eslint/no-explicit-any */
import { BikeFilter, TBike } from './bikes.interface';
import { Bike } from './bikes.model';

const createBike = async (payload: TBike) => {
  try {
    const result = await Bike.create(payload);
    return result;
  } catch (err) {
    throw new Error(err as string);
  }
};

const getBikeById = async (payload: string) => {
  const result = await Bike.findOne({ _id: payload }).populate('createdBy');
  return result;
};

const getAllBikes = async (filter: BikeFilter) => {
  const {
    minQuantity,
    maxQuantity,
    minPrice,
    maxPrice,
    brand,
    model,
    type,
    size,
    color,
  } = filter;
  const query: any = {};
  if (minQuantity && maxQuantity) {
    query.quantity = { $gte: minQuantity, $lte: maxQuantity };
  }

  if (minPrice && maxPrice) {
    query.price = { $gte: minPrice, $lte: maxPrice };
  }

  if (brand) {
    query.brand = new RegExp(brand, 'i');
  }
  if (model) {
    query.model = new RegExp(model, 'i');
  }
  if (type) {
    query.type = new RegExp(type, 'i');
  }
  if (size) {
    query.size = new RegExp(size, 'i');
  }
  if (color) {
    query.color = new RegExp(color, 'i');
  }
  const result = await Bike.find(query).populate('createdBy');
  return result;
};

const updateBike = async (id: string, bike: Partial<TBike>) => {
  try {
    const result = await Bike.findOneAndUpdate({ _id: id }, bike, {
      new: true,
    });
    return result;
  } catch (err) {
    throw new Error(err as string);
  }
};
const deleteBike = async (payload: string) => {
  try {
    const result = await Bike.deleteOne({ _id: payload });
    return result;
  } catch (err) {
    throw new Error(err as string);
  }
};
const deleteSelectedBikes = async (payload: Array<string>) => {
  try {
    const result = await Bike.deleteMany({ _id: { $in: payload } });
    return result;
  } catch (err) {
    throw new Error(err as string);
  }
};

export const BikeServices = {
  createBike,
  getBikeById,
  getAllBikes,
  updateBike,
  deleteBike,
  deleteSelectedBikes,
};
