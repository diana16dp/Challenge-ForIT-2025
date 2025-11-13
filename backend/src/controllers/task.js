const TaskService = require('../services/TaskService');

class TaskController {
    constructor() {
        this.taskService = new TaskService();
    }

    // Trae todas las tareas
    async getAllTasks(req, res, next) {
        try {
            const tasks = this.taskService.getAllTasks();
            res.status(200).json({
                success: true,
                data: tasks
            });
        } 
        catch (error) {
            next(error);
        }
    }

    // Crear una nueva tarea
    async createTask(req, res, next) {
        try {
            const { title, description } = req.body;

            if (!title || !description) {
                return res.status(400).json({
                    success: false,
                    error: 'El título y la descripción son obligatorios'
                });
            }

            const newTask = this.taskService.createTask({ title, description });

            res.status(201).json({
                success: true,
                data: newTask
            });
        } 
        catch (error) {
            next(error);
        }
    }


}

