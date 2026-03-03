import express from 'express';
import { AppError } from './utils/AppError.js';
import { catchAsync } from './utils/catchAsync.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
app.use(express.json());

const getUser = catchAsync(async (req, res, next) => {
  const user = null;

  if (!user) {

    return next(new AppError("User not found in the database!", 404)); 
  }

  res.status(200).json({ success: true, data: user });
});


app.get('/users', getUser);

app.use(errorHandler);

app.listen(3000, () => console.log(' Server running with Advanced Errors!'));