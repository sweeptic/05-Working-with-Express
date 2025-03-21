const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use('/', (req, res, next) => {
  next();
});

app.use('/add-product', (req, res, next) => {
  res.send(
    '<div style="width:100%;height:100%;background-color:gray" ><form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add Product</button></form ></div>'
  );
});

app.post('/product', (req, res, next) => {
  console.log('req', req.body);

  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<div style="width:100%;height:100%;background-color:gray" >hello</div>');
});

app.listen(3000);
