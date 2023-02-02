import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) return;
    onAdd({ id: uuidv4(), text, completed: false });
    setText('');
  };
  const handleChange = (e) => setText(e.target.value);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        value={text}
        onChange={handleChange}
        type='text'
        className={styles.input}
        placeholder='Add Todo'
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
