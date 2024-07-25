const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3001;
const server = http.createServer((req, res) => {

   if (req.url=="/about") {
    res.end("about page");
}

else if (req.url=="/contact") {
    res.end("contact page");
}

else if (req.url=="/link") {
    res.end("link page");
}

else if (req.url=="/email") {
    res.end("email page");
}

else if (req.url=="/profile") {
    res.end("profile page");
}

else{
    res.end("Default page");
}
});

server.listen(3001, 'localhost', () => {
    console.log('Server running at http://localhost:3001/');
});
