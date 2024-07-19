const express = require('express');
const routerPeople = require('./routes/peopleRoutes');

const app = express();

app.use(express.json());
app.use('/people', routerPeople)

module.exports = app;