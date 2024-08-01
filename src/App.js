import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TaskPage from './pages/TaskPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-task" element={<TaskPage />} />
        <Route path="/edit-task/:id" element={<TaskPage />} />
      </Routes>
    </Router>
  );
}

export default App;