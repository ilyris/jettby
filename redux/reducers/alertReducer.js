const initialState = {
  isActive: false,
  message: "",
  variant: "",
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MESSAGE":
      return {
        isActive: true,
        message: action.payload.message,
        variant: action.payload.variant,
      };
    case "RESET_ALERT":
      return {
        isActive: false,
        message: "",
        variant: "",
      };

    default:
      return state;
  }
};

export default alertReducer;
