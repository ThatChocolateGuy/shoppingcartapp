var express = require('express');
var router = express.Router();

/* GET array of numbers */
router.get('/', (req, res, next) => {
    res.render('arrays', {
      title: 'Arrays',
      numArray: [1,2,3]
    });
  });

  module.exports = router;