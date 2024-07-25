const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3001;
const server = http.createServer((req, res) => {

   if (req.url=="/about") {
    let d = fs.readFileSync('about.txt')
    res.end(d.toString())
}

else if (req.url=="/contact") {
    let d = fs.readFileSync('contact.txt')
    res.end(d.toString())
}

else if (req.url=="/link") {
    let d = fs.readFileSync('link.txt')
    res.end(d.toString())
}

else if (req.url=="/email") {
    let d = fs.readFileSync('email.txt')
    res.end(d.toString())
}

else if (req.url=="/profile") {
    let d = fs.readFileSync('profile.txt')
    res.end(d.toString())
}

else{
    res.end("Default page");
}
});

server.listen(3001, 'localhost', () => {
    console.log('Server running at http://localhost:3001/');
});
