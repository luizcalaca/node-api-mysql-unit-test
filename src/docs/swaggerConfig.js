const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Minha API',
      version: '1.0.0',
      description: 'Documentação da API usando Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3010',
        description: 'Servidor de Desenvolvimento',
      },
    ],
  },
  apis: [path.resolve(__dirname, '../routes/*.js')],
};

const specs = swaggerJsdoc(options);
module.exports = specs;
