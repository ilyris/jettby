const initialState = {
    [
        {
          "type": "select",
          "cid": "makeControl",
          "label": "Make",
          "options": [
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
            "Volvo"
          ]
        },
        {
          "type": "select",
          "cid": "modelControl",
          "label": "Model",
          "options": ["All models"]
        },
        {
          "type": "select",
          "cid": "priceControl",
          "label": "Price",
          "options": ["No max price"]
        },
        {
          "type": "select",
          "cid": "distanceControl",
          "label": "Distance",
          "options": ["30 mi"]
        },
        {
          "type": "text",
          "cid": "zipControl",
          "label": "Zip Code",
          "options": null
        }
      ]
}

const buyingInputsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INPUTS':
            return {
                inputs: action.payload
            };
            default: return state;
    }
}

export default buyingInputsReducer;