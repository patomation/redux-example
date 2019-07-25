import React from "react";
import { ReactReduxContext } from 'react-redux'
import { connect } from 'react-redux';

import {
  addTodo,
  changeTodoInput
} from '../actions/';

//Connect redux state to props
export default connect( (state) => {
  return {
    //This is how we get to our state/reducer todoList = []
    todoList: state.todoList
   }
})(class Success extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <ReactReduxContext.Consumer>
        {({ store }) =>
          <div>
            <input
              value={this.props.input}
              onChange={ event => {
                //This is how we pass the value up to global state
                store.dispatch(changeTodoInput(event.target.value)); }}/>
            <button onClick={ () => {
              //Only until we dispatch addTodo will the input get added as a todo
              store.dispatch(addTodo());
            }}>Add</button>
            <ol>
              {this.props.todoList.map( (item, index) =>
                <li key={index}>{item}</li> )}
            </ol>
          </div>
        }
      </ReactReduxContext.Consumer>
    )
  }
});
