import { Schema, model } from 'mongoose';
import { SaleModel, TSale } from './sales.interface';

const salesSchema = new Schema<TSale, SaleModel>(
  {
    buyerName: {
      type: String,
      required: [true, 'Buyer Name is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
    },
    bikeID: {
      type: Schema.Types.ObjectId,
      required: [true, 'Brand is required'],
      ref: 'Bike',
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    saleDate: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

export const Sale = model<TSale, SaleModel>('Sale', salesSchema);
