var models = require('../models/models.js');
var title = 'Quiz';

exports.index = function (req, res) {
    models.Quiz.findAll().then(function (quizes) {
        res.render('quizes/index', {
            quizes: quizes,
            title: title
        });
    });
};

exports.show = function (req, res) {
    models.Quiz.find(req.params.quizId).then(function (quiz) {
        res.render('quizes/show', {
            quiz: quiz,
            title: title
        });
    });
};

exports.answer = function (req, res) {
    models.Quiz.find(req.params.quizId).then(function (quiz) {
        var answer = 'Right!';
        var isRight = req.query.answer === quiz.answer;
        if (!isRight) {
            answer = 'Wrong!';
        }

        res.render('quizes/answer', {
            answer: answer,
            quiz: quiz,
            title: title
        });
    });
};
