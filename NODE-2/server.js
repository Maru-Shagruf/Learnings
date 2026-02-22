import express from 'express';
import { config } from './config/env.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json());


app.use('/users', userRoutes);

app.listen(config.port, () => {
  console.log(` Server running on http://localhost:${config.port}`);
  console.log(` Secret: ${config.secret}`);
});