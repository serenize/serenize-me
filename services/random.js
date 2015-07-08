var questions = require('../storage/questions.js');

function randomQuestion() {
  var number = Math.floor(Math.random() * questions.length);
  return questions[number];
}

module.exports = randomQuestion;
