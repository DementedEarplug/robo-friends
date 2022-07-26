import { combineReducers } from "redux";

import reducer from './reducer'

// In here put all the reducer which are esentially the state+reducers for each resource.
export default combineReducers({
  reducer: reducer
});