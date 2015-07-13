var models = require('../models/models.js');

exports.index = function (req, res) {
    models.Quiz.findAll().then(function (quizes) {
        res.render('quizes/index', {
            quizes: quizes
        });
    });
};

exports.load = function (req, res, next, quizId) {
    models.Quiz.findById(quizId).then(function (quiz) {
        if (quiz) {
            req.quiz = quiz;
            next();
        } else {
            var error = new Error(quizId + ' quizId does not exist.');
            next(error);
        }
    }).catch(function (error) {
        next(error);
    });
};

exports.show = function (req, res) {
    res.render('quizes/show', {
        quiz: req.quiz
    });
};

exports.answer = function (req, res) {
    var result = 'Right';
    var answer = req.query.answer;
    var isRight = answer === req.quiz.answer;
    if (!isRight) {
        result = 'Wrong';
    }

    res.render('quizes/answer', {
        answer: answer,
        result: result,
        quiz: req.quiz
    });
};
