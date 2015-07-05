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
    models.Quiz.findById(req.params.quizId).then(function (quiz) {
        console.log('quiz: ' + quiz);
        res.render('quizes/show', {
            quiz: quiz,
            title: title
        });
    });
};

exports.answer = function (req, res) {
    models.Quiz.findById(req.params.quizId).then(function (quiz) {
        var result = 'Right';
        var answer = req.query.answer;
        var isRight = answer === quiz.answer;
        if (!isRight) {
            result = 'Wrong';
        }

        res.render('quizes/answer', {
            answer: answer,
            result: result,
            quiz: quiz,
            title: title
        });
    });
};
