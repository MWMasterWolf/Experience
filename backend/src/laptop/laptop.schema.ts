import * as mongoose from 'mongoose';

export const LaptopSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  specs: String,
  imageUrl: {
    type: String,
    required: false
  }
});