import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
const SECRET_KEY = "my_super_secret_key";

const loggerMiddleware = (req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} request to ${req.url}`);
  next();
};

app.use(loggerMiddleware);

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Access Denied" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedUser = jwt.verify(token, SECRET_KEY);
    req.user = decodedUser;
    next();
  } catch (err) {
    return res.status(403).json({ error: "Invalid Token" });
  }
};

app.get('/login', (req, res) => {
  const user = { id: 99, role: "admin" };
  const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

app.get('/public', (req, res) => {
  res.send("Hello, regular user!");
});

app.get('/dashboard', verifyToken, (req, res) => {
  res.json({
    message: "Welcome to the secure dashboard",
    userData: req.user
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});