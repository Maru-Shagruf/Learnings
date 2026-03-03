import { registerUserService } from '../services/authServices.js';

export const register = async (req, res) => {
  try {
    // Pass the raw data to the Service Layer
    const userDTO = await registerUserService(req.body);
    
    // Send the clean DTO back to the client
    res.status(201).json({ success: true, data: userDTO });
    
  } catch (error) {
    // Catch errors thrown by the Service
    res.status(400).json({ success: false, message: error.message });
  }
};