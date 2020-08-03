import React from "react";

const Counter = ({ counter, onIncrement, onDecrement }) => {
  return (
    <span>
      {counter}
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </span>
  );
};

const CounterList = ({ counters, onIncrement, onDecrement }) => {
  return (
    <div>
      {counters.map((counter, index) => (
        <div>
          <Counter
            key={index}
            counter={counter}
            onIncrement={() => onIncrement(index)}
            onDecrement={() => onDecrement(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default CounterList;
