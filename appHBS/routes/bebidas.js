var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bebidas', { title: 'bebidas' });
});

router.get('/agua', function(req, res, next) {
  res.render('agua', { title: 'Água' });
});

router.get('/refrigerante', function(req, res, next) {
  res.render('refrigerante', { title: 'Refrigerante' });
});

module.exports = router;
