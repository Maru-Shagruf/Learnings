import express from 'express';
import { getUsers, addUser } from '../controllers/userController.js'; 

const router = express.Router();

// Route to get all users
router.get('/', getUsers);

// Route to add a new user
router.post('/', addUser);

export default router;