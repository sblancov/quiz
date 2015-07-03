var path = require('path');

var Sequelize = require('sequelize');

var sequelizeOptions = {
    dialect: 'sqlite',
    storage: 'quiz.sqlite'
};
var sequelize = new Sequelize(null, null, null, sequelizeOptions);

var Quiz = sequelize.import(path.join(__dirname, 'quiz'));

exports.Quiz = Quiz;

sequelize.sync().then(function () {
    Quiz.count().then(function (count) {
        if (count === 0) {
            Quiz.create({
                question: 'Capital of Italy',
                answer: 'Rome'
            }).then(function () {
                console.log('Data base initialized.');
            });
        }
    });
});
