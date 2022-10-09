import { SET_MODEL_OPTIONS } from "../actionTypes";

const initialState = {
  inputs: [
    {
      type: "select",
      cid: "makeControl",
      label: "Make",
      options: [
        "All makes",
        "Abarth",
        "Alfa Romeo",
        "Aston Martin",
        "Audi",
        "Bentley",
        "BMW",
        "Bugatti",
        "Cadillac",
        "Chevrolet",
        "Chrysler",
        "Citroën",
        "Dodge",
        "Ferrari",
        "Fiat",
        "Fisker",
        "Ford",
        "Honda",
        "Hummer",
        "Hyundai",
        "Infiniti",
        "Iveco",
        "Jaguar",
        "Jeep",
        "Kia",
        "Lamborghini",
        "Land Rover",
        "Lexus",
        "Lotus",
        "Maserati",
        "Maybach",
        "Mazda",
        "McLaren",
        "Mercedes-Benz",
        "MG",
        "Mini",
        "Mitsubishi",
        "Morgan",
        "Nissan",
        "Peugeot",
        "Porsche",
        "Renault",
        "Rolls-Royce",
        "Rover",
        "Saab",
        "Seat",
        "Smart",
        "Subaru",
        "Suzuki",
        "Tesla",
        "Toyota",
        "Volkswagen",
        "Volvo",
      ],
    },
    {
      type: "select",
      cid: "modelControl",
      label: "Model",
      options: ["All models"],
    },
    {
      type: "select",
      cid: "priceControl",
      label: "Price",
      options: [
        "No max price",
        "1,000 - 5,000",
        "5,000 - 10,000",
        "10,000 - 15,000",
        "15,000 - 20,000",
        "20,000 - 25,000",
        "25,000 - 35,000",
        "35,000 - 40,000",
        "40,000 - 45,000",
        "45,000 - 50,000",
      ],
    },
    {
      type: "select",
      cid: "distanceControl",
      label: "Distance",
      options: ["30 mi"],
    },
    {
      type: "text",
      cid: "zipControl",
      label: "Zip Code",
      options: null,
    },
  ],
};

const modelOptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODEL_OPTIONS:
      const modelObj = {
        ...state.inputs[1],
        options: ["All models", ...action.payload],
      };
      state.inputs[1] = modelObj;
      return { ...state };
    default:
      return state;
  }
};

export default modelOptionReducer;
