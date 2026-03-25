import express from 'express';
import * as controllers from './controllers.js';
import { verifyToken, validateProduct, upload } from './middleware.js';

const router = express.Router();

router.post('/register', controllers.register);
router.post('/login', controllers.login);
router.post('/upload', verifyToken, upload.single('avatar'), controllers.uploadProfile);

router.get('/products', controllers.getProducts);
router.post('/products', verifyToken, validateProduct, controllers.createProduct);

export default router;