const Sequelize = require('sequelize');
require('dotenv').config();

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
        require: true
        }
    },
    host: PGHOST,
    port: PGPORT
});

module.exports = sequelize;