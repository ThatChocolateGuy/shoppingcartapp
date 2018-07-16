var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET array of numbers */
router.get('/arrays', (req, res) => {
  res.render('arrays',
  {
    title: 'Arrays',
    numArray: [1,2,3]
  });
});

module.exports = router;
