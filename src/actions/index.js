export const incrementCounter = key => {
  return {
    type: "INCREMENT",
    key
  };
};

export const decrementCounter = key => {
  return {
    type: "DECREMENT",
    key
  };
};

export const addCounter = () => {
  return {
    type: "ADD_COUNTER"
  };
};
