import React from 'react';

const TaskListItem = ({ task, onDeleteTask, onPriorityChange }) => {
  return (
    <li>
      <span>{task.name}</span>
      <select
        value={task.priority}
        onChange={(e) => onPriorityChange(task.id, e.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskListItem;