// import reducers here
import { combineReducers } from 'redux';
import modelOptionReducer from './modelOptionReducer';
import buyingReducer from './buyingReducer';

const rootReducer = combineReducers({
  buying: buyingReducer,
  modelOptionReducer: modelOptionReducer,
});

export default rootReducer;
