import express from 'express';
import { createClient } from 'redis';

const app = express();


const redisClient = createClient({
  url: 'rediss://default:ASSvAAImcDFhMGYyODc0ZjI3ZmM0OThjYjE5NjI2MDkzZjdmNjQxOXAxOTM5MQ@intimate-kite-9391.upstash.io:6379'
});
redisClient.on('error', (err) => console.log('Redis Error:', err));

await redisClient.connect(); 

//  Fake Slow Database 
const fetchFromDatabase = () => {
  return new Promise(resolve => setTimeout(() => {
    resolve([{ id: 1, name: "MacBook" }, { id: 2, name: "iPhone" }]);
  }, 3000));
};


app.get('/products', async (req, res) => {
  // Start the stopwatch!
  console.time(" Response Time"); 

  try {
    const cachedData = await redisClient.get('productsList');

    if (cachedData) {
      console.timeEnd(" Response Time"); 
      return res.json({ source: " REDIS CACHE", data: JSON.parse(cachedData) });
    }

    const dbData = await fetchFromDatabase();

    await redisClient.set('productsList', JSON.stringify(dbData), { EX: 10 });

    console.timeEnd(" Response Time"); 
    res.json({ source: " SLOW DATABASE", data: dbData });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log(" Redis Server running on port 3000"));