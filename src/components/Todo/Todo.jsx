import React from 'react';
import styles from './Todo.module.css';
import { FaTrashAlt } from 'react-icons/fa';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, completed } = todo;

  const handleChange = (e) =>
    onUpdate({ ...todo, completed: e.target.checked });
  const handleDelete = () => {
    onDelete(todo);
  };

  return (
    <li className={styles.todo}>
      <input
        checked={completed}
        onChange={handleChange}
        type='checkbox'
        name={id}
        id={id}
        className={styles.checkbox}
      />
      <label className={styles.text} htmlFor={id}>
        {text}
      </label>
      <button onClick={handleDelete} className={styles.button}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
