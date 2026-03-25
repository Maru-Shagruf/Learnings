import * as services from './services.js';

export const register = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: "Missing data" });
  services.registerUser(username, password);
  res.status(201).json({ message: "Registered. Check console for email link." });
};

export const login = (req, res) => {
  const token = services.loginUser(req.body.username, req.body.password);
  if (!token) return res.status(400).json({ error: "Invalid credentials" });
  res.json({ token });
};

export const getProducts = async (req, res) => {
  const data = await services.getProducts(req.query.page, req.query.limit);
  res.json(data);
};

export const createProduct = async (req, res) => {
  const data = await services.createProduct(req.body);
  res.status(201).json(data);
};

export const uploadProfile = (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  res.json({ url: `http://localhost:${process.env.PORT}/uploads/${req.file.filename}` });
};