const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTask = { id: Date.now(), name: action.task, priority: 'low' };
      localStorage.setItem('tasks', JSON.stringify([...state.tasks, newTask]));
      return {...state, tasks: [...state.tasks, newTask] };
    case 'DELETE_TASK':
      const filteredTasks = state.tasks.filter((task) => task.id!== action.id);
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
      return {...state, tasks: filteredTasks };
    case 'UPDATE_TASK_PRIORITY':
      const updatedTask = state.tasks.find((task) => task.id === action.id);
      updatedTask.priority = action.priority;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
      return {...state, tasks: state.tasks };
    default:
      return state;
  }
};

export default taskReducer;