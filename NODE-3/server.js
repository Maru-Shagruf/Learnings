import express from 'express';
import { connectDB } from './config/db.js'; 
import userRoutes from './routes/userRoutes.js';
const app = express();
app.use(express.json());

// 1. Connect to Database
connectDB();

// 2. Routes
app.use('/users', userRoutes);

app.listen(3000, () => console.log(' Server running on port 3000'));