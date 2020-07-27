import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./redux/reducers";
import middleware from "./middleware";

import App from "./App";

const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
