import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import './TaskForm.css';

function TaskForm() {
  const [task, setTask] = useState({ title: '', description: '', isCompleted: false });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      api.get(`/tasks/${id}`)
        .then(response => {
          setTask(response.data);
        })
        .catch(error => {
          console.error('Error fetching task:', error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask({
      ...task,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      api.put(`/tasks/${id}`, task)
        .then(() => {
          navigate('/');
        })
        .catch(error => {
          console.error('Error updating task:', error);
        });
    } else {
      api.post('/tasks', task)
        .then(() => {
          navigate('/');
        })
        .catch(error => {
          console.error('Error creating task:', error);
        });
    }
  };

  return (
    <div>
      <h1>{id ? 'Edit Task' : 'Create Task'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="isCompleted"
              checked={task.isCompleted}
              onChange={handleChange}
            />
            Completed
          </label>
        </div>
        <button type="submit">{id ? 'Update Task' : 'Create Task'}</button>
      </form>
    </div>
  );
}

export default TaskForm;