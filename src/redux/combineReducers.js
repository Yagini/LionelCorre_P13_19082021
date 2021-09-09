import { combineReducers } from "redux";
import { authentication, user } from "./reducer.js";

const rootReducer = combineReducers({
  authentication,
  user,
});

export default rootReducer
