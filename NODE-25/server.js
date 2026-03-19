import express from 'express';
import Joi from 'joi';

const app = express();
app.use(express.json());

const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.number().positive().required(),
  category: Joi.string().valid('tech', 'clothing').required()
});

const validateProduct = (req, res, next) => {
  const { error } = productSchema.validate(req.body);
  
  if (error) {
    const customError = new Error(error.details[0].message);
    customError.status = 400;
    customError.type = 'ValidationException';
    return next(customError);
  }
  
  next();
};

app.post('/products', validateProduct, (req, res, next) => {
  try {
    res.status(201).json({ success: true, data: req.body });
  } catch (err) {
    next(err);
  }
});

app.get('/broken-route', (req, res, next) => {
  const unexpectedError = new Error("Database connection lost");
  next(unexpectedError);
});

const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  const errorType = err.type || 'ServerException';

  res.status(statusCode).json({
    success: false,
    error: {
      type: errorType,
      message: err.message || "Internal Server Error"
    }
  });
};

app.use(globalErrorHandler);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});