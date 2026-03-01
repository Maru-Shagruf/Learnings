import Product from '../models/Product.js';

export const createProduct = async (req, res) => {
  // We get req.user.id from the auth middleware!
  const product = await Product.create({ ...req.body, userId: req.user.id });
  res.status(201).json(product);
};

export const getProducts = async (req, res) => {
  // .populate() replaces the userId string with the actual User's name/email!
  const products = await Product.find().populate('userId', 'name email');
  res.json(products);
};