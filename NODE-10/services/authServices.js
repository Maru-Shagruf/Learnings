import bcrypt from 'bcryptjs';
import { findUserByEmail, createNewUser } from '../repositories/userRepository.js';

// DTO Concept: A helper to strip out the password before sending to the frontend
const toUserDTO = (user) => {
  return { id: user._id, name: user.name, email: user.email };
};

export const registerUserService = async (userData) => {
  // 1. Check if user exists
  const existingUser = await findUserByEmail(userData.email);
  if (existingUser) throw new Error("Email already in use");

  // 2. Hash password
  const hashedPassword = await bcrypt.hash(userData.password, 10);

  // 3. Save to DB (via Repository)
  const newUser = await createNewUser({ ...userData, password: hashedPassword });

  // 4. Return the safe DTO (No password!)
  return toUserDTO(newUser);
};