import * as ProductService from '../services/productService.js';

export const getProducts = (req, res) => {
  const data = ProductService.getAll(req.query); 
  res.status(200).json({ success: true, data });
};

export const getProduct = (req, res) => {
  const data = ProductService.getById(req.params.id);
  if (!data) return res.status(404).json({ success: false, message: "Not found" });
  res.status(200).json({ success: true, data });
};

export const createProduct = (req, res) => {
  const data = ProductService.create(req.body);
  res.status(201).json({ success: true, data });
};

export const updateProduct = (req, res) => {
  const data = ProductService.update(req.params.id, req.body);
  if (!data) return res.status(404).json({ success: false, message: "Not found" });
  res.status(200).json({ success: true, data });
};

export const deleteProduct = (req, res) => {
  ProductService.remove(req.params.id);
  res.status(200).json({ success: true, message: "Deleted successfully" });
};