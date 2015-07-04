var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

var title = 'Quiz';
router.get('/', function(req, res) {
    res.render('index', {
        title: title
    });
});

router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

router.get('/author', function (req, res) {
    res.render('author', {
        title: title
    });
});

module.exports = router;
