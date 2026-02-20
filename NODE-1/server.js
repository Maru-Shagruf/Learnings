import http from 'http';

const server = http.createServer((req, res) => {
  
  res.setHeader('Content-Type', 'text/plain');

// 3 manual routes 
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Welcome to the Home Page!');
  } 
  else if (req.url === '/about') {
    res.statusCode = 200;
    res.end('This is a simple Node.js server created for practice.');
  } 
  else if (req.url === '/contact') {
    res.statusCode = 200;
    res.end('Contact me at: abc@gmaail.com');
  } 
  // 4. Handle 404 Not Found
  else {
    res.statusCode = 404;
    res.end('Oops! Page not found.');
  }
});

// 5. Tell the server to listen on port 3000
server.listen(3000, () => {
  console.log('Server is running! Open http://localhost:3000 in your browser.');
});