import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCars } from "../../../helpers/api-calls/car-data";

// const interface ListingState = {
// drivetrain: "AWD/All-Wheel Drive"
// engine: "268HP 4cyl  Gasoline fuel"
// exterior_color: "Blue"
// first_name: "dylan"
// last_name: "sieren"
// listing_price: 20000
// make: "SUBARU"
// mileage: 3456
// model: "WRX"
// origional_owner: "no"
// transmission: "6 speed Manual/Standard"
// year: "2020"
// zip_code: 80920
//   };

const initialState = {
  listings: [],
  page: 0,
  location: "",
  make: "",
  model: "",
  year: "",
  price: 0,
  mileage: "",
};

export const getListings = createAsyncThunk(
  "listing/getListings",
  // Declare the type your function argument here:
  async ({ make, model, price, distance, zip_code }): Promise<any> => {
    console.log({ make, model, price, distance, zip_code });
    const promise = await getCars({ make, model, price, distance, zip_code });
    console.log(promise);
    // Inferred return type: Promise<MyData>
    return promise.data;
  }
);

export const listings = createSlice({
  name: "listings",
  initialState,
  reducers: {
    // setSellerImages: (state, action) => {
    //   state.images.push(action.payload);
    // },
    // setCloudinaryImages: (state, action) => {
    //   state.cloudinaryImages = [...action.payload];
    // },
    // setErrors: (state, action) => {
    //   const keys = Object.keys(action.payload);
    //   const values = Object.values(action.payload);
    //   const errors = {};
    //   keys.forEach((key, i) => {
    //     errors[key] = values[i];
    //   });
    //   state.errors = errors;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getListings.fulfilled, (state, action) => {
      state.listings = action.payload;
    });
  },
});

const { actions, reducer } = listings;
// Action creators are generated for each case reducer function
// export const { setSellerImages, setCloudinaryImages, setErrors } = actions;

export default reducer;
