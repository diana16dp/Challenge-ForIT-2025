const express = require('express');
const taskRoutes = require('./task');

const router = express.Router();

// Todas las rutas empiezan con /api
router.use('/api', taskRoutes);

module.exports = router;