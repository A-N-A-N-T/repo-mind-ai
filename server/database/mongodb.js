import mongoose from 'mongoose';
import { env } from '../config/env.js';

export const connectDB = async () => {
  try {
    console.log(env.MONGODB_URI);
    const { connection } = await mongoose.connect(env.MONGODB_URI, {
            family: 4
        });

    console.log(`MongoDB connected successfully: ${connection.host}`);
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    throw error;
  }
};