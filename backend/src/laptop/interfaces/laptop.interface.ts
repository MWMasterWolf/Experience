import { Document } from "mongoose";

export interface Laptop extends Document {
  readonly brand: string;
  readonly model: string;
  readonly price: number;
  readonly size: string;
  readonly specs: string;
  readonly imageUrl?: string;
}