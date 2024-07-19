import React from 'react';

const TaskInput = ({ value, onChange, onAddTask }) => {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={() => onAddTask(value)}>Add Task</button>
    </div>
  );
};

export default TaskInput;