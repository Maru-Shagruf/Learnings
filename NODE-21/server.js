import express from 'express';
import productRoutes from './routes/productRoutes.js';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);

app.listen(3000, () => {
  console.log(" Complete API running on port 3000");
});