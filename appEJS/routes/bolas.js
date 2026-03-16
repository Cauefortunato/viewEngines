var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bolas', { title: 'bolas' });
});

router.get('/bolabasquete', function(req, res, next) {
  res.render('bolabasquete', { title: 'bolabasquete' });
});

router.get('/bolafutebol', function(req, res, next) {
  res.render('bolafutebol', { title: 'bolafutebol' });
});



module.exports = router;