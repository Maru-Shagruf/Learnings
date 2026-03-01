import express from 'express';
import { createProduct, getProducts } from '../controllers/productController.js';
import { verifyToken } from '../middleware/auth.js';
const router = express.Router();

// Products are PROTECTED! You must pass the verifyToken bouncer.
router.post('/', verifyToken, createProduct);
router.get('/', verifyToken, getProducts);
export default router;