const initialState = {
  vinData: {},
  licensePlate: null,
  state: null,
};

const sellingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VIN_DATA":
      return {
        ...state,
        vinData: action.payload,
      };
    case "SET_PLATE_AND_STATE":
      return {
        ...state,
        licensePlate: action.payload.licensePlate,
        state: action.payload.state,
      };
    default:
      return state;
  }
};

export default sellingReducer;
