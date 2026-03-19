var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sapatos', { title: 'sapatos' });
});

router.get('/tenis', function(req, res, next) {
  res.render('tenis', { title: 'tenis' });
});

router.get('/sandalhas', function(req, res, next) {
  res.render('sandalhas', { title: 'sandalhas' });
});

module.exports = router;