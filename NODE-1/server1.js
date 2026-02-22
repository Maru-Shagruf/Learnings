import express from 'express';
const app = express();

// MIDDLEWARE: Lets the server read JSON data
app.use(express.json()); 

//   A simple array
let users = []; 

// 1. CREATE (POST)
app.post('/users', (req, res) => {
  users.push(req.body); 
  res.send('User added!');
});

// 2. READ (GET)
app.get('/users', (req, res) => {
  res.send(users);
});

// 3. UPDATE (PUT)
app.put('/users/:id', (req, res) => {
  let user = users.find(u => u.id == req.params.id);
  user.name = req.body.name; // Updates the name
  res.send('User updated!');
});

// 4. DELETE (DELETE)
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.send('User deleted!');
});

// START SERVER
app.listen(3000, () => console.log('Server running on 3000'));