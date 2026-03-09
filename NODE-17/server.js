import express from 'express';
import cron from 'node-cron';

const app = express();


// The 6 stars mean: Seconds, Minutes, Hours, Day, Month, Weekday
// "*/5 * * * * *" = Run this exactly every 5 seconds (For testing!)
// "0 0 * * *" = Run this every day at exactly Midnight (For production)

cron.schedule('*/5 * * * * *', () => {
  console.log('\n [BACKGROUND JOB] Waking up...');
  console.log(' Deleting old expired tokens from the database...');
  console.log(' [BACKGROUND JOB] Cleanup complete! Going back to sleep.');
});



app.get('/', (req, res) => {
  res.send("Server is running. Check your terminal to see the robot working!");
});

app.listen(3000, () => {
  console.log(" Server running on port 3000");
  console.log(" Wating for the background robot to wake up...");
});