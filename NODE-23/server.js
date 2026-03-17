import express from 'express';
import cors from 'cors';
import 'dotenv/config'; 

const app = express();

//  1. CORS CONFIGURATION

app.use(cors({
  origin: process.env.FRONTEND_URL, 
  methods: ['GET', 'POST'], // Only allow reading and creating
  credentials: true
}));




// 2. USING OUR SECRETS
app.get('/status', (req, res) => {
  res.json({
    success: true,
    message: "Server is highly secure! ",
    databaseStatus: process.env.MONGO_URI ? "Connected to Secret DB" : "No DB Found",
    jwtReady: !!process.env.JWT_SECRET
  });
});



//3. START SERVER WITH HIDDEN PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Secure API running on port ${PORT}`);
});