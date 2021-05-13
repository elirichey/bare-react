import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import BodyNavContainer from "./BodyNavContainer";

let store = createStore(rootReducer, composeWithDevTools());

render(
  <Provider store={store}>
    <BodyNavContainer />
  </Provider>,
  document.getElementById("iframe")
);
