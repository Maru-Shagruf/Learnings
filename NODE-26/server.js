import express from 'express';

const app = express();
app.use(express.json());

let notes = [];
let currentId = 1;

app.get('/notes', (req, res) => {
  res.json({ success: true, data: notes });
});

app.post('/notes', (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ success: false, error: "Title is required" });
  }
  
  const newNote = { 
    id: currentId++, 
    title: req.body.title, 
    content: req.body.content || "" 
  };
  
  notes.push(newNote);
  res.status(201).json({ success: true, data: newNote });
});

app.delete('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = notes.length;
  
  notes = notes.filter(n => n.id !== id);
  
  if (notes.length === initialLength) {
    return res.status(404).json({ success: false, error: "Note not found" });
  }
  
  res.json({ success: true });
});

app.listen(3000);