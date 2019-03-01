import { combineReducers } from "redux";
import ActualReducer from "./reducer_actual";

const rootReducer = combineReducers({
  actualMap: ActualReducer
});

export default rootReducer;
