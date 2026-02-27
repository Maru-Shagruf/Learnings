import express from 'express';
import { register, login } from './authController.js';

const app = express();
app.use(express.json());


app.post('/register', register);
app.post('/login', login);

app.listen(3000, () => console.log(' Auth Server running on port 3000'));