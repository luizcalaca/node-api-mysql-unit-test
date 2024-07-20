const express = require('express');
const routerPeople = require('./routes/peopleRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./docs/swaggerConfig');
const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use('/api/people', routerPeople)

module.exports = app;