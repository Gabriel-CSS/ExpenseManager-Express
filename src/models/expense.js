const Sequelize = require('sequelize');
const sequelizeDatabase = require('../database/sequelize-database');

const Expense = sequelizeDatabase.define('Expense', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    amount: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userId: {
       type: Sequelize.INTEGER,
       allowNull: false,
       references: {
        model: 'Users',
        key: 'id'
       },
       field: 'userId'
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    tableName: 'Expenses'
});

module.exports = Expense;