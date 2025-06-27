// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Manager API',
      version: '1.0.0',
      description: 'API documentation for the Task Manager project',
    },
  },
  apis: ['./routes/*.js'], // Path to your route files with Swagger comments
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
