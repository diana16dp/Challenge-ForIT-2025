import React from 'react';
import { type Task } from '../../types/task';
import styles from './TaskItem.module.css';

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string, completed: boolean) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onToggleComplete }) => {
  const handleCheckboxChange = () => {
    onToggleComplete(task.id, task.completed);
  };

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <li className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}>
      <div className={styles.taskContent}>
        <div className={styles.taskHeader}>
          <h3 className={styles.title}>{task.title}</h3>
          <span className={styles.date}>
            Creada: {formatDate(task.createAt)}
          </span>
        </div>

        <p className={styles.description}>{task.description}</p>

        <div className={styles.taskActions}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
            />
            <span className={styles.checkmark}></span>
            Completada
          </label>

          <button
            onClick={handleDeleteClick}
            className={styles.deleteButton}
            aria-label="Eliminar tarea">
                
            Eliminar
          </button>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
