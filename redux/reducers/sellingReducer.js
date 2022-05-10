import { SET_SELLING_OPTIONS } from '../actionTypes';

const initialState = {
  vin: '',
  License_plate: '',
  state: '',
};

const sellingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELLING_OPTIONS:
      return {
        state: action.payload,
      };
    default:
      return state;
  }
};

export default sellingReducer;
