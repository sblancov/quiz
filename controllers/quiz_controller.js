exports.question = function (req, res) {
    res.render('quizes/question', {
        pregunta: 'Capital of Italy',
        title: 'Quiz'
    });
};

exports.answer = function (req, res) {
    var result = 'Right!';

    var isRome = req.query.respuesta === 'Roma';
    if (!isRome) {
        result = 'Wrong!';
    }

    res.render('quizes/answer', {
        respuesta: result,
        title: 'Quiz'
    });
};
