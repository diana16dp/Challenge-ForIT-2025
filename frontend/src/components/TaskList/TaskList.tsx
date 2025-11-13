import React, { useState, useEffect } from 'react';
import { type Task } from '../../types/task';
import { getAllTasks, deleteTask, updateTask } from '../../services/taskApi';
import TaskItem from '../TaskItem/TaskItem';
import styles from './TaskList.module.css';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const tasksData = await getAllTasks();
      setTasks(tasksData);
      setError(null);
    } catch (err) {
      setError('Error al cargar las tareas');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      setError('Error al eliminar la tarea');
      console.error('Error deleting task:', err);
    }
  };

  const handleToggleComplete = async (id: string, completed: boolean) => {
    try {
      const taskToUpdate = tasks.find(task => task.id === id);
      if (!taskToUpdate) return;

      const updatedTask = await updateTask(id, {
        title: taskToUpdate.title,
        description: taskToUpdate.description,
        completed: !completed
      });

      setTasks(tasks.map(task =>
        task.id === id ? updatedTask : task
      ));
    } catch (err) {
      setError('Error al actualizar la tarea');
      console.error('Error updating task:', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Cargando tareas...</div>;
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>{error}</p>
        <button onClick={fetchTasks}>Reintentar</button>
      </div>
    );
  }

  return (
    <div className={styles.taskList}>
      <h1>Lista de Tareas</h1>
      {tasks.length === 0 ? (
        <p className={styles.empty}>No hay tareas disponibles</p>
      ) : (
        <ul className={styles.list}>
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={handleDelete}
              onToggleComplete={handleToggleComplete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
