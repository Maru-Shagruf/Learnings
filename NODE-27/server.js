import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import winston from 'winston';
import cron from 'node-cron';
import 'dotenv/config';
import routes from './routes.js';

const app = express();

const logger = winston.createLogger({
  transports: [new winston.transports.Console({ format: winston.format.simple() })]
});

app.use(helmet());
app.use(cors());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.use('/api', routes);

app.use((err, req, res, next) => {
  logger.error(err.message);
  res.status(500).json({ error: "Server Error" });
});

cron.schedule('0 0 * * *', () => {
  logger.info("Running daily background cleanup task");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Enterprise API running on port ${PORT}`);
});