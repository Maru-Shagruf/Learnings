import express from 'express';
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);          // Read All
router.post('/', createProduct);       // Create
router.get('/:id', getProduct);        // Read One
router.put('/:id', updateProduct);     // Update One
router.delete('/:id', deleteProduct);  // Delete One

export default router;