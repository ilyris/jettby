const initialState = {
    make: '',
    model: '',
    price: '',
    distance: 30,
    zip_code: 11111,
  };
  
  const sellingReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELLING_CAR':
        return {
          car: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default sellingreducer;