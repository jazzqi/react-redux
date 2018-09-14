import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { combineReducers, createStore } from "redux";
// provider give us access to the store
import { Provider } from "react-redux";
import productReducer from "./reducers/product-reducer";
import userReducer from "./reducers/user-reducer";


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

ReactDOM.render(
  <Provider store={store}>
    <App aRandomProps='whatever' />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
