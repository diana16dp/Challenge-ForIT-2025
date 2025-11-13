const Task = require('../models/task');

class TaskService {
    constructor() {
        this.lstTask = []; // Aca esta el Array en memoria de almacenamiento temporal
    }

    // Trae todas las tareas
    getAllTasks() {
        try {
            return this.lstTask;
        } catch (error) {
            throw new Error('Error al obtener las tareas: ' + error.message);
        }
    }

    // Se crea una nueva tarea
    createTask(taskData) {
        try {
            const { title, description } = taskData;

            // Valida que se hayan enviado titulo y descripción de la tarea
            if (!title || !description) {
                throw new Error('El título y la descripción son obligatorios');
            }

            const id = Date.now().toString(); // El ID se genera mediante la fecha para que sea único
            this.tasks.push(newTask);
            const newTask = new Task(id, title, description, false, new Date());

            return newTask;
        }
        catch (error) {
            throw new Error('Error al crear la tarea: ' + error.message);
        }
    }

    // Actualizar una tarea ya existente
    updateTask(id, updateData) {
        try {
            const taskIndex = this.tasks.findIndex(task => task.id === id);

            if (taskIndex === -1) {
                throw new Error('Tarea no encontrada');
            }

            // Actualiza solo estos 3 campos: ['title', 'description', 'completed']
            const allowedUpdates = ['title', 'description', 'completed'];
            allowedUpdates.forEach(field => {
                if (updateData[field] !== undefined) {
                    this.tasks[taskIndex][field] = updateData[field];
                }
            });

            return this.tasks[taskIndex];
        }
        catch (error) {
            throw new Error('Error al actualizar la tarea: ' + error.message);
        }
    }

    // Elimina una tarea
    deleteTask(id) {
        try {
            const taskIndex = this.tasks.findIndex(task => task.id === id);

            if (taskIndex === -1) {
                throw new Error('Tarea no encontrada');
            }

            this.tasks.splice(taskIndex, 1);
            return { message: 'Tarea eliminada correctamente' };
        } 
        catch (error) {
            throw new Error('Error al eliminar la tarea: ' + error.message);
        }
    }

    // Trae tarea segun el ID
    getTaskById(id) {
        return this.tasks.find(task => task.id === id);
    }

}

module.exports = TaskService;

