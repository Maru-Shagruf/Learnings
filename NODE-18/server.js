import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import winston from 'winston';
import { createClient } from 'redis';

const app = express();
app.use(express.json()); 


//  1. SECURITY
app.use(helmet()); 
app.use(cors());   
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 })); 





//  2. LOGGING 
const logger = winston.createLogger({
  transports: [new winston.transports.Console({ format: winston.format.simple() })]
});


// Log every single request that comes in
app.use((req, res, next) => { 
  logger.info(` Traffic: ${req.method} ${req.url}`); 
  next(); 
});




//  3. CACHING SETUP 

const redisClient = createClient({ url: '' });
await redisClient.connect();




//  FAKE DATABASE
const ordersDB = [{ id: 1, item: "MacBook Pro", price: 2000 }];




// 4. VALIDATION MIDDLEWARE 
const validateOrder = (req, res, next) => {
  if (!req.body.item || !req.body.price) {
    logger.error(" Validation Failed: Missing item or price!");
    return res.status(400).json({ error: "Item and price are required!" });
  }
  next();
};




// 5. THE ROUTES

app.get('/orders', async (req, res) => {
  const cachedOrders = await redisClient.get('all_orders');
  
  if (cachedOrders) {
    return res.json({ source: " REDIS CACHE", data: JSON.parse(cachedOrders) });
  }

  await redisClient.set('all_orders', JSON.stringify(ordersDB), { EX: 15 });
  res.json({ source: " DATABASE", data: ordersDB });
});




// POST: Create new order (Uses Validation + Clears Cache!)
app.post('/orders', validateOrder, async (req, res) => {
  const newOrder = { id: Date.now(), item: req.body.item, price: req.body.price };
  ordersDB.push(newOrder);




  await redisClient.del('all_orders'); 

  logger.info(` Success: New order created for ${newOrder.item}`);
  res.status(201).json({ message: "Order placed!", order: newOrder });
});

// --- START SERVER ---
app.listen(3000, () => logger.info(" Production Module Running on Port 3000!"));