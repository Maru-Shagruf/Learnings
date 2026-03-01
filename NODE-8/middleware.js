import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; 

  if (!token) return res.status(401).json({ error: "Access Denied. No Token." });

  jwt.verify(token, "AccessSecretKey", (err, user) => {
    if (err) return res.status(403).json({ error: "Token Expired or Invalid." });
    req.user = user;
    next();
  });
};