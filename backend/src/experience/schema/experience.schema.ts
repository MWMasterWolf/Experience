import { Schema } from "mongoose";

export const ExperienceSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  content: String,
  imageUrl: {
    type: String,
    required: false
  },
  createdBy: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})