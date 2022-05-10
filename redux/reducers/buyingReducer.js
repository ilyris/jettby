import { SET_BUYING_OPTIONS } from '../actionTypes';

const initialState = {
  make: '',
  model: '',
  price: '',
  distance: 30,
  zip_code: 11111,
};

const buyingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUYING_OPTIONS:
      return {
        car: action.payload,
      };
    default:
      return state;
  }
};

export default buyingReducer;
