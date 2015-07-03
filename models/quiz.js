module.exports = function (sequelize, DataTypes) {
    var name = 'Quiz';
    var fields = {
        question: DataTypes.STRING,
        answer: DataTypes.STRING
    };
    var table = sequelize.define(name, fields);

    return table;
};
