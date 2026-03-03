import express from 'express';
import { createProduct, getProducts } from '../controllers/productController.js';
import { verifyToken } from '../middleware/auth.js';
const router = express.Router();

router.post('/', verifyToken, createProduct);
router.get('/', verifyToken, getProducts);
export default router;