import React from 'react';
import { Link } from 'react-router-dom';
import TaskList from '../components/TaskList/TaskList';
import styles from './TaskListPage.module.css';

const TaskListPage: React.FC = () => {
  return (
    <div className={styles.taskListPage}>
      <div className={styles.header}>
        <Link to="/" className={styles.backButton}>
          ← Volver al Inicio
        </Link>
        <div className={styles.headerActions}>
          <h1>Gestión de Tareas</h1>
          <Link to="/tasks/new" className={styles.newTaskButton}>
            + Nueva Tarea
          </Link>
        </div>
      </div>

      <div className={styles.content}>
        <TaskList />
      </div>
    </div>
  );
};

export default TaskListPage;
