var models = require('../models/models.js');

exports.question = function (req, res) {
    models.Quiz.findAll().then(function (quiz) {
        res.render('quizes/question', {
            question: quiz[0].question,
            title: 'Quiz'
        });
    });
};

exports.answer = function (req, res) {
    models.Quiz.findAll().then(function (quiz) {
        var answer = 'Right!';
        var isRome = req.query.answer === quiz[0].answer;
        if (!isRome) {
            answer = 'Wrong!';
        }

        res.render('quizes/answer', {
            answer: answer,
            title: 'Quiz'
        });
    });
};
