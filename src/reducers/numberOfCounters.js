const numberOfCountersReducer = (state = 1, action) => {
  if (action.type === "ADD_COUNTER") {
    return state + 1;
  } else {
    return state;
  }
};

export default numberOfCountersReducer;
