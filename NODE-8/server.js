import express from 'express';
import jwt from 'jsonwebtoken';
import { verifyToken } from './middleware.js';

const app = express();
app.use(express.json());

let refreshTokensDB = []; 

// 1. LOGIN 
app.post('/login', (req, res) => {
  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, "AccessSecretKey", { expiresIn: '30s' });
  

  const refreshToken = jwt.sign(user, "RefreshSecretKey", { expiresIn: '7d' });
  

  refreshTokensDB.push(refreshToken);

  res.json({ accessToken, refreshToken });
});

// 2. REFRESH ROUTE 
app.post('/refresh', (req, res) => {
  const refreshToken = req.body.token;

  if (!refreshToken) return res.status(401).json({ error: "No refresh token provided!" });
  if (!refreshTokensDB.includes(refreshToken)) return res.status(403).json({ error: "Invalid refresh token!" });


  jwt.verify(refreshToken, "RefreshSecretKey", (err, user) => {
    if (err) return res.status(403).json({ error: "Refresh token expired!" });


    const newAccessToken = jwt.sign({ name: user.name }, "AccessSecretKey", { expiresIn: '30s' });
    res.json({ accessToken: newAccessToken });
  });
});

// 3. LOGOUT 
app.post('/logout', (req, res) => {
 
  refreshTokensDB = refreshTokensDB.filter(token => token !== req.body.token);
  res.status(200).json({ message: "Logged out successfully. Token destroyed." });
});

app.get('/dashboard', verifyToken, (req, res) => {
  res.json({ message: `Welcome to the secure dashboard, ${req.user.name}!` });
});

app.listen(3000, () => console.log(' Prod API running on port 3000'));