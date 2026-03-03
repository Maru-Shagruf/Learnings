import Product from '../models/Product.js';

export const createProduct = async (req, res) => {
  
  const product = await Product.create({ ...req.body, userId: req.user.id });
  res.status(201).json(product);
};

export const getProducts = async (req, res) => {

  const products = await Product.find().populate('userId', 'name email');
  res.json(products);
};