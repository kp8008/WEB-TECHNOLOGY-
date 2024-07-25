// Import the http module
const http = require('http');

// Define a port to listen on
const port = 3000;

// Create a server
const server = http.createServer((req, res) => {
  // Set the response status code and headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body
  res.end('Hello prince World\n');
});

// Listen on the specified port
server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});
