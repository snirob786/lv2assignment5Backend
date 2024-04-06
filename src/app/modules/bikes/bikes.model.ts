import { Schema, model } from 'mongoose';
import { BikeModel, TBike } from './bikes.interface';

const bikeSchema = new Schema<TBike, BikeModel>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
    },
    brand: {
      type: String,
      required: [true, 'Brand is required'],
    },
    model: {
      type: String,
    },
    type: {
      type: String,
    },
    size: {
      type: String,
    },
    color: {
      type: String,
    },
    cc: {
      type: String,
    },
    frameMaterial: {
      type: String,
    },
    suspensionsType: {
      type: String,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    releaseDate: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

export const Bike = model<TBike, BikeModel>('Bike', bikeSchema);
