var express = require('express');
var router = express.Router();
var randomQuestion = require('../services/random');

router.get('/question', function(req, res, next) {
  res.json({question: randomQuestion()});
});

module.exports = router;
