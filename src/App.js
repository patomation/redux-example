import React from "react";
import { render } from "react-dom";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import { createLogger } from 'redux-logger';

import thunkMiddleware from 'redux-thunk';
const loggerMiddleware = createLogger();

import rootReducers from './reducers/';

let store = createStore(
  rootReducers,
  applyMiddleware(
    thunkMiddleware, // Enables dispatch() functions
    loggerMiddleware // logs actions
  )
);

import Consumer from './components/Consumer.js';

render(
  <Provider store={store}>
    <Consumer />
  </Provider>,
  document.getElementById("root")
);
