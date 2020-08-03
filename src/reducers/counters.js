import _ from "lodash";

const counterReducer = (state = { "0": 0 }, action) => {
  switch (action.type) {
    case "ADD_COUNTER": {
      const index = _.values(state).length;
      return { ...state, [index]: 0 };
    }
    case "INCREMENT": {
      const key = action.key;
      const incrementValue = state[key] + 1;
      return { ...state, [key]: incrementValue };
    }

    case "DECREMENT": {
      const key = action.key;
      const decrementValue = state[key] - 1;
      return { ...state, [key]: decrementValue };
    }
    default:
      return state;
  }
};

export default counterReducer;
