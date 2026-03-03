import bcrypt from 'bcryptjs';
import { findUserByEmail, createNewUser } from '../repositories/userRepository.js';


const toUserDTO = (user) => {
  return { id: user._id, name: user.name, email: user.email };
};

export const registerUserService = async (userData) => {
  
  const existingUser = await findUserByEmail(userData.email);
  if (existingUser) throw new Error("Email already in use");

 
  const hashedPassword = await bcrypt.hash(userData.password, 10);

 
  const newUser = await createNewUser({ ...userData, password: hashedPassword });

  return toUserDTO(newUser);
};