const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('<div style="width:100%;height:100%;background-color:gray" >hello</div>');
});

module.exports = router;
