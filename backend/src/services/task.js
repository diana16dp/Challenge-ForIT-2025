const Task = require('../models/Task');

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

}

