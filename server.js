const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // console.log('request made');
  // console.log(req.url, req.method);
  let path = './views/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }
  // res.setHeader('Content-Type', 'text/html');
  // res.write('<h1>EXPRESS JS</h1>');
  // res.write('<p font-color="red">Hello world</p>');
  // res.end();
  fs.readFile(path, (err, data) => {
    if(err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      res.end(data); 
    }
  })
});

server.listen(3000, 'localhost', () => {
  console.log('listening to request on port 3000');
})