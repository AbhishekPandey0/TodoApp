import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import { login, logout } from './actions/authActions';
import { addTask, deleteTask, updateTaskPriority } from './actions/taskActions';

function App({ tasks, isAuthenticated, login, logout, addTask, deleteTask, updateTaskPriority }) {
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      // fetch tasks from API or local storage
    }
  }, [isAuthenticated]);

  const handleAddTask = (task) => {
    addTask(task);
    setNewTask('');
  };

  const handleDeleteTask = (id) => {
    deleteTask(id);
  };

  const handleUpdateTaskPriority = (id, priority) => {
    updateTaskPriority(id, priority);
  };

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="app-container">
      {isAuthenticated ? (
        <div>
          <TaskInput
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onAddTask={handleAddTask}
          />
          <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onPriorityChange={handleUpdateTaskPriority} />
        </div>
      ) : (
        <div>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
      {isAuthenticated && (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { login, logout, addTask, deleteTask, updateTaskPriority })(App);