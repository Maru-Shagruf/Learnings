import express from 'express';
import jwt from 'jsonwebtoken';
import { verifyToken, isAdmin } from './middleware/auth.js';

const app = express();
app.use(express.json());
const SECRET = "MySuperSecretKey";


app.post('/login', (req, res) => {
  const { role } = req.body; 
  
  const token = jwt.sign({ id: 1, role: role || 'user' }, SECRET, { expiresIn: "1h" });
  res.json({ message: "Logged in!", token });
});


app.get('/profile', verifyToken, (req, res) => {
  res.json({ message: "Welcome to your profile!", userData: req.user });
});


app.get('/admin-dashboard', verifyToken, isAdmin, (req, res) => {
  res.json({ message: "Welcome to the secret Admin Dashboard! " });
});

app.listen(3000, () => console.log(' Server running on port 3000'));