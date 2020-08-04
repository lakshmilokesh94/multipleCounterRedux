import React from "react";
import ReactDOM from "react-dom";

import App from "./containers/App";
import store from "./store/index";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";

const rootElement = document.getElementById("root");
console.log(store.getState());
const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={App} />
            <Route exact path="/*" component={Login} />
          </Switch>
        </Router>
      </Provider>
    </React.StrictMode>,
    rootElement
  );
};

render();

store.subscribe(render);
