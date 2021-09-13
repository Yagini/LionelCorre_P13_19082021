import { combineReducers } from "redux";
import { authentication, user } from "../_reducers/reducer";

const rootReducer = combineReducers({
  authentication,
  user,
});

export default rootReducer
