export const addTask = (task) => {
  return { type: 'ADD_TASK', task };
};

export const deleteTask = (id) => {
  return { type: 'DELETE_TASK', id };
};

export const updateTaskPriority = (id, priority) => {
  return { type: 'UPDATE_TASK_PRIORITY', id, priority };
};