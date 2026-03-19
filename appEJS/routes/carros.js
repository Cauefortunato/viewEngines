var express = require('express');
var router = express.Router();

/* GET home page. */

var carros = [
  { nome: 'Fusca', marca: 'Volkswagen', ano: 1970 },
  { nome: 'Civic', marca: 'Honda', ano: 2020 },
  { nome: 'Corolla', marca: 'Toyota', ano: 2019 },
  { nome: 'Mustang', marca: 'Ford', ano: 2021 },
  { nome: 'Camaro', marca: 'Chevrolet', ano: 2022 }
];

router.get('/', function(req, res, next) {
  res.render('carros', { title: 'carros', carros: carros });
});

module.exports = router;
