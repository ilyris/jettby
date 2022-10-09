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
  distance: "",
  make: "",
  model: "",
  zip_code: 11111,
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
    return { result: promise.data, make, model, price, distance, zip_code };
  }
);

export const listings = createSlice({
  name: "listings",
  initialState,
  reducers: {
    setSearchData: (state, action) => {
      const { make, model, price, distance, zip_code } = action.payload;
      state.make = make;
      state.model = model;
      state.price = price;
      state.distance = distance;
      state.zip_code = zip_code;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getListings.fulfilled, (state, action) => {
      const { result, make, model, price, distance, zip_code } = action.payload;
      state.listings = result;
      state.make = make;
      state.model = model;
      state.price = price;
      state.distance = distance;
      state.zip_code = zip_code;
    });
  },
});

const { actions, reducer } = listings;
// Action creators are generated for each case reducer function
// export const { setSellerImages, setCloudinaryImages, setErrors } = actions;

export default reducer;
