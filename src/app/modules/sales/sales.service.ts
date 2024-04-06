import { Bike } from '../bikes/bikes.model';
import { TSale } from './sales.interface';
import { Sale } from './sales.model';

const createSale = async (payload: TSale) => {
  try {
    const bikeData = await Bike.findById(payload.bikeID);
    if (bikeData) {
      const result = await Sale.create(payload);
      const newQuantity = bikeData.quantity - payload.quantity;
      await Bike.findOneAndUpdate(
        { _id: payload.bikeID },
        { quantity: newQuantity },
      );
      return result;
    } else {
      throw new Error('This bike is not available');
    }
  } catch (err) {
    throw new Error(err as string);
  }
};

const getSaleById = async (payload: string) => {
  const result = await Sale.findOne({ _id: payload }).populate('createdBy');
  return result;
};

const getAllSales = async () => {
  const result = await Sale.find().populate('createdBy');
  return result;
};

const updateSale = async (id: string, bike: Partial<TSale>) => {
  try {
    const result = await Sale.findOneAndUpdate({ _id: id }, bike, {
      new: true,
    });
    return result;
  } catch (err) {
    throw new Error(err as string);
  }
};
const deleteSale = async (payload: string) => {
  try {
    const result = await Sale.deleteOne({ _id: payload });
    return result;
  } catch (err) {
    throw new Error(err as string);
  }
};
const deleteSelectedSales = async (payload: Array<string>) => {
  try {
    const result = await Sale.deleteMany({ _id: { $in: payload } });
    return result;
  } catch (err) {
    throw new Error(err as string);
  }
};

export const SaleServices = {
  createSale,
  getSaleById,
  getAllSales,
  updateSale,
  deleteSale,
  deleteSelectedSales,
};
