import express from 'express';

const app = express();

// FAKE DB
const productsDB = [
  { id: 1, name: "MacBook Pro", category: "laptop", price: 2000 },
  { id: 2, name: "Dell XPS", category: "laptop", price: 1500 },
  { id: 3, name: "iPhone 15", category: "phone", price: 1000 },
  { id: 4, name: "Samsung S24", category: "phone", price: 900 },
  { id: 5, name: "iPad Air", category: "tablet", price: 600 },
  { id: 6, name: "Lenovo ThinkPad", category: "laptop", price: 1200 },
  { id: 7, name: "Google Pixel 8", category: "phone", price: 800 },
  { id: 8, name: "Cheap Tablet", category: "tablet", price: 100 }
];

app.get('/products', (req, res) => {
  let results = [...productsDB]; 
  if (req.query.category) {
    results = results.filter(p => p.category === req.query.category);
  }


  if (req.query.sort === 'price') {
    results.sort((a, b) => a.price - b.price); 
  } else if (req.query.sort === '-price') {
    results.sort((a, b) => b.price - a.price);
  }

  
  const page = Number(req.query.page) || 1;   
  const limit = Number(req.query.limit) || 3;
  const skip = (page - 1) * limit;           

 
  const paginatedResults = results.slice(skip, skip + limit);

 
  res.json({
    totalFound: results.length,
    currentPage: page,
    showing: paginatedResults.length,
    data: paginatedResults
  });
});

app.listen(3000, () => console.log(" running on port 3000"));