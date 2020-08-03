import { combineReducers } from "redux";
import counters from "./counters";
import numberOfCounters from "./numberOfCounters";

const reducer = combineReducers({
  counters,
  numberOfCounters
});

export default reducer;
