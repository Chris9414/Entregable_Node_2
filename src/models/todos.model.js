const {DataTypes} = require('sequelize');
const db = require('../utils/database');

const ToDo = db.define("toDos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
});

module.exports = ToDo

