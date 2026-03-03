import express from 'express';
import { register } from '../controllers/authController.js';

const router = express.Router();

// Route connects to the Waiter (Controller)
router.post('/register', register); 

export default router;