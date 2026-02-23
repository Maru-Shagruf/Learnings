import User from '../models/User.js';

// 1. GET ALL USERS
export const getUsers = async (req, res) => {
  try {
    const users = await User.find(); // Fetching
    res.status(200).json({ success: true, count: users.length, data: users });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// 2. user creation
export const addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({ success: true, data: newUser });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};