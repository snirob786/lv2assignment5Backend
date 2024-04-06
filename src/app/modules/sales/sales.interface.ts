/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';
export type TSale = {
  buyerName: string;
  quantity: number;
  bikeID: Types.ObjectId;
  createdBy: Types.ObjectId;
  saleDate: Date;
  createdAt: Date;
  updatedAt: Date;
};

export interface SaleModel extends Model<TSale> {}
