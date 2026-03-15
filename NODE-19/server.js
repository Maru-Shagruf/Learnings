import express from 'express';

const app = express();
app.use(express.json());

// 📦 FAKE DATABASE
let users = [{ id: 1, name: "Batman" }];

// RESTFUL API 



// 1. READ ALL
app.get('/users', (req, res) => {
  // Standard Response: 200 OK
  res.status(200).json({ success: true, message: "Users fetched", data: users });
});


// 2. READ ONE 
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  
  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }
  res.status(200).json({ success: true, message: "User found", data: user });
});

// 3. CREATE 
app.post('/users', (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ success: false, message: "Name is required" });
  }

  const newUser = { id: Date.now(), name: req.body.name };
  users.push(newUser);

  res.status(201).json({ success: true, message: "User created", data: newUser });
});

// 4. DELETE
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  
  res.status(200).json({ success: true, message: "User deleted", data: null });
});

app.listen(3000, () => console.log(" RESTful API running on port 3000"));