// import reducers here
import { combineReducers } from 'redux';
import modelOptionReducer from './modelOptionReducer';
import buyingReducer from './buyingReducer';
import sellingReducer from './sellingReducer';

const rootReducer = combineReducers({
  buying: buyingReducer,
  selling: sellingReducer,
  modelOptionReducer: modelOptionReducer,
});

export default rootReducer;
