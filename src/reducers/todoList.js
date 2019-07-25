export default (state = [], action) => 
  (action.type === 'TODO_LIST' ? action.value : state);
