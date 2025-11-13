import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import TaskForm from '../components/TaskForm/TaskForm';
import { type Task } from '../types/task';
import styles from './TaskFormPage.module.css';

interface LocationState {
  task: Task;
}

const TaskFormPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const isEditing = Boolean(id);
  const existingTask = (location.state as LocationState)?.task;

  const handleSave = () => {
    navigate('/tasks');
  };

  const handleCancel = () => {
    navigate('/tasks');
  };

  return (
    <div className={styles.taskFormPage}>
      <div className={styles.header}>
        <button onClick={handleCancel} className={styles.backButton}>
          ← Volver a la lista
        </button>
        <h1>{isEditing ? 'Editar Tarea' : 'Crear Nueva Tarea'}</h1>
      </div>

      <div className={styles.content}>
        <TaskForm
          existingTask={existingTask}
          onSave={handleSave}
          onCancel={handleCancel}/>
      </div>
    </div>
  );
};

export default TaskFormPage;