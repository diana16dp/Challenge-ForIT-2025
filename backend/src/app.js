const express = require('express');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware de errores 
app.use(errorHandler);