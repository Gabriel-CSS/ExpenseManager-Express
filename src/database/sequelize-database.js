const Sequelize = require('sequelize');
require('dotenv').config();

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT, PGDIALECT } = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    dialect: PGDIALECT,
    dialectOptions: {
        ssl: {
        require: true
        }
    },
    host: PGHOST,
    port: PGPORT
});

module.exports = sequelize;