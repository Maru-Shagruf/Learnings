import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const users = []; // Fake Database
const SECRET = "MySuperSecretKey";

//   1.Register


export const register = async (req, res) => {
  const { email, password } = req.body;


  const hashedPassword = await bcrypt.hash(password, 10);

  
  const newUser = { id: Date.now(), email, password: hashedPassword };
  users.push(newUser);

  res.status(201).json({ success: true, message: "User registered!" });
};



// 2.Login



export const login = async (req, res) => {
  const { email, password } = req.body;


  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ error: "User not found!" });

 
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Wrong password!" });


  const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: "1h" });

  res.status(200).json({ success: true, message: "Logged in!", token });
};