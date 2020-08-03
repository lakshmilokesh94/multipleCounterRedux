import React from "react";
import ReactDOM from "react-dom";

import App from "./containers/App";
import store from "./store/index";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
console.log(store.getState());
const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    rootElement
  );
};

render();

store.subscribe(render);
