const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.send(
    '<div style="width:100%;height:100%;background-color:gray" ><form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add Product</button></form ></div>'
  );
});

router.post('/product', (req, res, next) => {
  console.log('req', req.body);

  res.redirect('/');
});

module.exports = router;
