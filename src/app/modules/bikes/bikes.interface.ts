/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';
export type TBike = {
  name: string;
  price: number;
  quantity: number;
  brand: string;
  model: string;
  type: string;
  size: string;
  color: string;
  cc: string;
  frameMaterial: string;
  suspensionsType: string;
  createdBy: Types.ObjectId;
  releaseDate: Date;
  createdAt: Date;
  updatedAt: Date;
};

export interface BikeModel extends Model<TBike> {
  isCourseExists(name: string): Promise<TBike | null>;
}

export interface BikeFilter {
  minQuantity?: number;
  maxQuantity?: number;
  minPrice?: number;
  maxPrice?: number;
  brand?: string;
  model?: string;
  type?: string;
  size?: string;
  color?: string;
}
