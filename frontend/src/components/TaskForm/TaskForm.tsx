import React, { useState, useEffect } from 'react';
import { type Task, type TaskInput } from '../../types/task';
import { createTask, updateTask } from '../../services/taskApi';
import styles from './TaskForm.module.css';

interface TaskFormProps {
  existingTask?: Task;
  onSave: () => void;
  onCancel: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ existingTask, onSave, onCancel }) => {
  const [formData, setFormData] = useState<TaskInput>({
    title: '',
    description: '',
    completed: false
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (existingTask) {
      setFormData({
        title: existingTask.title,
        description: existingTask.description,
        completed: existingTask.completed
      });
    }
  }, [existingTask]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      setError('El título es requerido');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      if (existingTask) {
        await updateTask(existingTask.id, formData);
      } else {
        await createTask(formData);
      }
      onSave();
    } catch (err) {
      setError(existingTask
        ? 'Error al actualizar la tarea'
        : 'Error al crear la tarea'
      );
      console.error('Error saving task:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.taskForm}>
      <h2>{existingTask ? 'Editar Tarea' : 'Nueva Tarea'}</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Título *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={styles.input}
            placeholder="Ingresa el título de la tarea"
            disabled={loading}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.label}>
            Descripción
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={styles.textarea}
            placeholder="Ingresa la descripción de la tarea"
            rows={4}
            disabled={loading}
          />
        </div>

        <div className={styles.checkboxGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="completed"
              checked={formData.completed}
              onChange={handleChange}
              className={styles.checkbox}
              disabled={loading}
            />
            <span className={styles.checkmark}></span>
            Tarea completada
          </label>
        </div>

        {error && (
          <div className={styles.error}>
            {error}
          </div>
        )}

        <div className={styles.buttons}>
          <button
            type="button"
            onClick={onCancel}
            className={styles.cancelButton}
            disabled={loading}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={loading}
          >
            {loading ? 'Guardando...' : (existingTask ? 'Actualizar' : 'Crear')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
