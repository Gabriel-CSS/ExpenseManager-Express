const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Expense Manager API - Express',
        version: '1.0.0',
        description: 'Expense Manager API Documentation',
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
    apis: [
      'src/schemas/*.js',
      'src/docs/*.js',
      'src/routes/*.js'
    ]
  };
  
const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec