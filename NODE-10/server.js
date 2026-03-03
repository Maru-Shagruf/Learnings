import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';

const app = express();
app.use(express.json());


app.use('/api/auth', authRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/enterprise_db')
  .then(() => {
    console.log(' MongoDB Connected');
    app.listen(3000, () => console.log('Enterprise Server running on port 3000'));
  })
  .catch(err => console.log(err));