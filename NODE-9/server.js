import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Connect DB & Start
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(process.env.PORT, () => console.log(`Server on port ${process.env.PORT}`));
  });