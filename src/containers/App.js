import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  addCounter
} from "../actions/index";

import CounterList from "../components/CounterList";
import AddCounter from "../components/AddCounter";

import _ from "lodash";

function App(props) {
  const onIncrement = key => {
    props.dispatch(incrementCounter(key));
  };

  const onDecrement = key => {
    props.dispatch(decrementCounter(key));
  };

  const onAddCounter = () => {
    props.dispatch(addCounter());
  };

  return (
    <div className="App">
      <CounterList
        counters={_.values(props.counters)}
        onIncrement={key => onIncrement(key)}
        onDecrement={key => onDecrement(key)}
      />
      <AddCounter onAdd={onAddCounter} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(App);
