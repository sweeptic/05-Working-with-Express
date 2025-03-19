const http = require('http');
const express = require('express');

const app = express();

//runs every incoming request
app.use((req, res, next) => {
  console.log('middleware 1 runs');
  next();
});
app.use((req, res, next) => {
  console.log('middleware 2 runs');
  next();
});
app.use((req, res, next) => {
  console.log('middleware 3 runs');
  next();
  res.send('hello');
});

const server = http.createServer(app);

server.listen(3000);
