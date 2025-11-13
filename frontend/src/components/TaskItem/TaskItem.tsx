import React from 'react';
import { type Task } from '../../types/task';
import styles from './TaskItem.module.css';

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string, completed: boolean) => void;
  onEdit: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onToggleComplete, onEdit }) => {
  const handleCheckboxChange = () => {
    onToggleComplete(task.id, task.completed);
  };

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleEditClick = () => {
    onEdit(task);
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

          <div className={styles.actionButtons}>
            <button
              onClick={handleEditClick}
              className={styles.editButton}
              aria-label="Editar tarea"
            >
              Editar
            </button>

            <button
              onClick={handleDeleteClick}
              className={styles.deleteButton}
              aria-label="Eliminar tarea"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
