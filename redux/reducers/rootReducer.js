// import reducers here
import { combineReducers } from "redux";
import modelOptionReducer from "./modelOptionReducer";
import buyingReducer from "./buyingReducer";
import sellingreducer from "./sellingReducer";
import alertReducer from "./alertReducer";

const rootReducer = combineReducers({
  buying: buyingReducer,
  selling: sellingreducer,
  alert: alertReducer,
  modelOptionReducer: modelOptionReducer,
});

export default rootReducer;
