// import reducers here
import { combineReducers } from "redux";
import modelOptionReducer from "./modelOptionReducer";
import buyingReducer from "./buyingReducer";
import sellingreducer from "./sellingReducer";
import alertReducer from "./alertReducer";
import sellingTest from "../features/selling/selling";
import listings from "../features/listing/listings";

const rootReducer = combineReducers({
  buying: buyingReducer,
  selling: sellingreducer,
  alert: alertReducer,
  modelOptionReducer: modelOptionReducer,
  sellingTest,
  listings,
});

export default rootReducer;
