const initialState = {
  vinData: {},
  licensePlate: null,
  state: null,
  images: [],
  cloudinaryImages: [],
  errors: {},
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
    case "SET_CLOUDINARY_IMAGES":
      return {
        ...state,
        cloudinaryImages: action.payload,
      };
    case "SET_ERRORS":
      const keys = Object.keys(action.payload);
      const values = Object.values(action.payload);
      const errors = {};

      keys.forEach((key, i) => {
        errors[key] = values[i];
      });

      return {
        ...state,
        errors,
      };
    default:
      return state;
  }
};

export default sellingReducer;
