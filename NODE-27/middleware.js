import jwt from 'jsonwebtoken';
import Joi from 'joi';
import multer from 'multer';

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Access Denied" });

  try {
    req.user = jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch {
    return res.status(403).json({ error: "Invalid Token" });
  }
};

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().positive().required()
});

export const validateProduct = (req, res, next) => {
  const { error } = productSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

export const upload = multer({ dest: 'uploads/' });