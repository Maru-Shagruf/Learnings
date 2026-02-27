import jwt from 'jsonwebtoken';

const SECRET = "MySuperSecretKey"; 


export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; 
  if (!token) return res.status(401).json({ error: "Access denied. No token!" });

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded; 
    next(); 
  } catch (err) {
    res.status(403).json({ error: "Invalid or expired token!" });
  }
};


export const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: "Access denied. Admins only!" });
  }
  next();
};