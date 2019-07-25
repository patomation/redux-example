export default (state = '', action) =>
  (action.type === 'TODO_INPUT' ? action.value : state);
