const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./utils/openapi-util');

const app = express();

const indexRoute = require('./routes/index-route');
const userRoute = require('./routes/user-route');
const expenseRoute = require('./routes/expense-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/swagger-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/', indexRoute);
app.use('/users', userRoute);
app.use('/expenses', expenseRoute);

module.exports = app;