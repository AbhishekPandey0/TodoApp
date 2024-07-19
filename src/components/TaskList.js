import React from 'react';
import TaskListItem from './TaskListItem';

const TaskList = ({ tasks, onDeleteTask, onPriorityChange }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskListItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onPriorityChange={onPriorityChange}
        />
      ))}
    </ul>
  );
};

export default TaskList;