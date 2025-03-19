const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  console.log('always runs');
  next();
});

app.use('/product', (req, res, next) => {
  res.send('product');
});

app.use('/', (req, res, next) => {
  console.log('hello');
  res.send('root');
});

app.listen(3000);
