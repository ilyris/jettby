// import reducers here
import { combineReducers } from 'redux';
import { buyingReducer } from './buyingReducer';

const rootReducer = combineReducers({
  buying: buyingReducer,
});

export default rootReducer;
