var express = require('express');
var router = express.Router();
var randomQuestion = require('../services/random');

router.get('/', function(req, res) {
  res.render('index', { question: randomQuestion()});
});

module.exports = router;
