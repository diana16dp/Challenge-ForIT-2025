const express = require('express');
const TaskController = require('../controllers/task');

const router = express.Router();
const taskController = new TaskController();

// GET /api/tasks - Obtener todas las tareas
router.get('/tasks', (req, res, next) => taskController.getAllTasks(req, res, next));

// POST /api/tasks - Crear una nueva tarea
router.post('/tasks', (req, res, next) => taskController.createTask(req, res, next));

// PUT /api/tasks/:id - Actualizar una tarea existente
router.put('/tasks/:id', (req, res, next) => taskController.updateTask(req, res, next));

// DELETE /api/tasks/:id - Eliminar una tarea
router.delete('/tasks/:id', (req, res, next) => taskController.deleteTask(req, res, next));

module.exports = router;
