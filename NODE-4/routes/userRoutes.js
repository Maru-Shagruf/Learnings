import express from 'express';
import { createUser, getUsers, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/', createUser);       // POST /users
router.get('/', getUsers);          // GET /users
router.put('/:id', updateUser);     // PUT /users/123
router.delete('/:id', deleteUser);  // DELETE /users/123

export default router;