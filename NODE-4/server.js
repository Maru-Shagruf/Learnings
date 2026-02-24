import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());

app.use('/users', userRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(' MongoDB Connected');
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
  })
  .catch((err) => console.log(' DB Connection Error: ', err));