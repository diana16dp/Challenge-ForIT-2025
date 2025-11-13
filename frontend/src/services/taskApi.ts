import { type Task, type TaskInput } from '../types/task';
import { type ApiError } from '../types/api';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Función auxiliar para manejar respuestas HTTP
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error: ApiError = {
      message: `Error ${response.status}: ${response.statusText}`,
      status: response.status
    };
    throw error;
  }
  return response.json();
}

// GET /api/tasks - Obtener todas las tareas
export async function getAllTasks(): Promise<Task[]> {
  const response = await fetch(`${API_BASE_URL}/api/tasks`);
  return handleResponse<Task[]>(response);
}

// POST /api/tasks - Crear una nueva tarea
export async function createTask(taskData: TaskInput): Promise<Task> {
  const response = await fetch(`${API_BASE_URL}/api/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  });
  return handleResponse<Task>(response);
}

// PUT /api/tasks/:id - Actualizar una tarea existente
export async function updateTask(id: string, taskData: TaskInput): Promise<Task> {
  const response = await fetch(`${API_BASE_URL}/api/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  });
  return handleResponse<Task>(response);
}

// DELETE /api/tasks/:id - Eliminar una tarea
export async function deleteTask(id: string): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/api/tasks/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const error: ApiError = {
      message: `Error ${response.status}: ${response.statusText}`,
      status: response.status
    };
    throw error;
  }

  return;
}
