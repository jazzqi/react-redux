import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { combineReducers, createStore } from "redux";

function productReducer(state = [], action) {
  return state;
}

function userReducer(state = "", {type, payload}) {
  switch (type) {
    case 'updateUser':
      return payload
    default:
      break;
  }
  return state;
}

const allReducers = combineReducers({
  products: productReducer,
  user: userReducer
});

const store = createStore(
  allReducers,
  {
    products: [
      {
        name: "iPhone"
      }
    ],
    user: "Steve"
  },
  window.devToolsExtension && window.devToolsExtension()
);

const updateUserAction = {
  type: 'updateUser',
  payload: {
    user: 'Tim'
  }
}

console.log(store.getState());
store.dispatch(updateUserAction);

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
