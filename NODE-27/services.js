import jwt from 'jsonwebtoken';
import { createClient } from 'redis';
import nodemailer from 'nodemailer';

let users = [];
let products = [];
let pId = 1;

export const redisClient = createClient({ url: process.env.REDIS_URL });
redisClient.connect().catch(() => console.log("Redis cache disabled"));

const sendEmail = async (to, subject, text) => {
  const account = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: { user: account.user, pass: account.pass }
  });
  const info = await transporter.sendMail({ from: 'admin@api.com', to, subject, text });
  console.log("Email URL:", nodemailer.getTestMessageUrl(info));
};

export const registerUser = (username, password) => {
  users.push({ username, password });
  sendEmail(username, "Welcome", "Registration successful");
  return true;
};

export const loginUser = (username, password) => {
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return null;
  return jwt.sign({ username }, process.env.SECRET_KEY, { expiresIn: '1h' });
};

export const getProducts = async (page = 1, limit = 2) => {
  const cacheKey = `products:${page}:${limit}`;
  
  if (redisClient.isReady) {
    const cached = await redisClient.get(cacheKey);
    if (cached) return JSON.parse(cached);
  }

  const skip = (page - 1) * limit;
  const result = {
    total: products.length,
    page: Number(page),
    data: products.slice(skip, skip + Number(limit))
  };

  if (redisClient.isReady) await redisClient.setEx(cacheKey, 15, JSON.stringify(result));
  return result;
};

export const createProduct = async (data) => {
  const newProduct = { id: pId++, ...data };
  products.push(newProduct);
  if (redisClient.isReady) await redisClient.flushAll(); 
  return newProduct;
};