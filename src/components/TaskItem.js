import React from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import './TaskItem.css'

function TaskItem({ task }) {
  const handleDelete = () => {
    api.delete(`/${task.id}`)
      .then(() => {
        window.location.reload(); // Recargar la página para actualizar la lista
      })
      .catch(error => {
        console.error('Error deleting task:', error);
      });
  };

  return (
    <li>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.isCompleted ? 'Completed' : 'Pending'}</p>
      <Link to={`/edit-task/${task.id}`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TaskItem;