export function addTodo(){
  return (dispatch, getState) => {

    let newTodoList = getState().todoList.slice(0),
        item = getState().todoInput;
    newTodoList.push(item);
    dispatch({
      type:'TODO_LIST',
      value: newTodoList
    });

  }
}
