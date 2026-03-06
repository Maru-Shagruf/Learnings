import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const app = express();
// 1. HELMET 
app.use(helmet());


// 2. STRICT CORS 
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST']        
}));

// 3. RATE LIMITING 
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 15, // 15 request per 15 minutes
  message: { error: "Too many requests, please try again later." }
});

app.use(limiter); 


app.get('/', (req, res) => {
  res.send("Your API is now locked down and secure! ");
});

app.listen(3000, () => console.log(" Secure Server running on port 3000"));