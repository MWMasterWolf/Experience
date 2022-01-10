import { Document } from "mongoose";

export interface Experience extends Document {
  readonly title: string;
  readonly description: string;
  readonly content: string;
  readonly imageUrl?: string;
  readonly createdBy: string;
  readonly createdAt: string;
}