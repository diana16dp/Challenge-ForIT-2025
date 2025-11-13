import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Gestor de Tareas</h1>
        <p className={styles.subtitle}>
          Una aplicación simple para gestionar tus tareas diarias
        </p>

        <div className={styles.actions}>
          <Link to="/tasks" className={styles.primaryButton}>
            Ver Todas las Tareas
          </Link>
          <Link to="/tasks/new" className={styles.secondaryButton}>
            Crear Nueva Tarea
          </Link>
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.feature}>
          <h3>📝 Crear</h3>
          <p>Agrega nuevas tareas</p>
        </div>
        <div className={styles.feature}>
          <h3>✅ Completo</h3>
          <p>Marca tareas como finalizadas</p>
        </div>
        <div className={styles.feature}>
          <h3>✏️ Editar</h3>
          <p>Editar tareas</p>
        </div>
        <div className={styles.feature}>
          <h3>🗑️ Eliminar</h3>
          <p>Eliminar tareas</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;