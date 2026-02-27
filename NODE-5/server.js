import express from 'express';
import { validateUser } from './middleware/validator.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
app.use(express.json());

app.post('/users', validateUser, (req, res) => {
  
  res.status(201).json({
    success: true,
    message: "User created successfully!",
    data: req.body
  });
});


app.use(errorHandler);

app.listen(3000, () => console.log(' Server running on port 3000'));