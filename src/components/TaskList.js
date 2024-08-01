import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import TaskItem from './TaskItem';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get('/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  return (
    <div>
      <h1>To-Do List</h1>
      <Link to="/new-task">Create New Task</Link>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;