import express from 'express';
import winston from 'winston';

const app = express();


const logger = winston.createLogger({
  level: 'info',
 
  transports: [ new winston.transports.File({ filename: 'app.log' }) ]
});


if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({ format: winston.format.simple() }));
}

app.use((req, res, next) => {
  logger.info(`🚦 Traffic: ${req.method} request to ${req.url}`);
  next(); 
});

// --- Routes ---
app.get('/', (req, res) => res.send("Check your terminal and app.log!"));
app.get('/crash', (req, res) => { throw new Error("Database exploded!"); });


app.use((err, req, res, next) => {
  logger.error(`Crash Report: ${err.message}`);
  res.status(500).send("Server Error!");
});

app.listen(3000, () => logger.info("Server started on port 3000"));