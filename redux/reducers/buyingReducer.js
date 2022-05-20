const initialState = {
  make: '',
  model: '',
  price: '',
  distance: 30,
  zip_code: 55555,
};

const buyingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BUYING':
      return {
        car: action.payload,
      };
    case 'SET_ZIP':
      return {
        ...state,
        zip_code: action.payload,
      };
    default:
      return state;
  }
};

export default buyingReducer;
