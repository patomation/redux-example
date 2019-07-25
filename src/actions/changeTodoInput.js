export function changeTodoInput(text){
  return (dispatch, getState) => {

    dispatch({
      type:'TODO_INPUT',
      value: text
    });

  }
}
