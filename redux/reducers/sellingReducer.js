const initialState = {
  vinData: {},
  licensePlate: null,
  state: null,
  images: [],
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
    case "SET_SELLER_IMAGES":
      return {
        ...state,
        images: action.payload,
      };
    default:
      return state;
  }
};

export default sellingReducer;
