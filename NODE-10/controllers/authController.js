import { registerUserService } from '../services/authServices.js';

export const register = async (req, res) => {
  try {
   
    const userDTO = await registerUserService(req.body);
    

    res.status(201).json({ success: true, data: userDTO });
    
  } catch (error) {

    res.status(400).json({ success: false, message: error.message });
  }
};