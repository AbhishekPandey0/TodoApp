import { createStore, combineReducers } from 'edux';
import taskReducer from './reducers/taskReducer';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
  auth: authReducer,
});

const store = createStore(rootReducer);

export default store;