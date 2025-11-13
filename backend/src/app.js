const express = require('express');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Conversión a JSON
app.use(express.json());

app.use(routes);

// Middleware de errores
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Servidor ejecutándose en puerto ${PORT}`);
    console.log(`Endpoints disponibles:`);
    console.log(`  GET http://localhost:${PORT}/api/tasks`);
    console.log(`  POST http://localhost:${PORT}/api/tasks`);
    console.log(`  PUT http://localhost:${PORT}/api/tasks/:id`);
    console.log(`  DELETE http://localhost:${PORT}/api/tasks/:id`);
});
