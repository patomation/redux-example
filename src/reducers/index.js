import { combineReducers } from 'redux';

import todoInput from './todoInput.js';
import todoList from './todoList.js';

export default combineReducers({
  todoInput,
  todoList
});
