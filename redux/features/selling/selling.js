import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getVinInfo } from "../../../helpers/api-calls/dot-calls";

// const interface SellingState = {
//     vinData: {},
//     licensePlate: null,
//     state: null,
//     images: [],
//     errors: {},
//   };

const initialState = {
  vinData: {},
  licensePlate: null,
  state: null,
  images: [],
  errors: {},
};

export const fetchVinData = createAsyncThunk(
  "sellingTest/setVinData",
  // Declare the type your function argument here:
  async (vin) => {
    const promise = await getVinInfo(vin);
    console.log(promise);
    // Inferred return type: Promise<MyData>
    return promise;
  }
);

// await store.dispatch(fetchUserById(3))

export const sellingTest = createSlice({
  name: "sellingTest",
  initialState,
  reducers: {
    setSellerImages: (state, action) => {
      state.images.push(action.payload);
    },
    setErrors: (state, action) => {
      const keys = Object.keys(action.payload);
      const values = Object.values(action.payload);
      const errors = {};

      keys.forEach((key, i) => {
        errors[key] = values[i];
      });

      state.errors = errors;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVinData.fulfilled, (state, action) => {
      state.vinData = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setSellerImages, setErrors } = sellingTest.actions;

export default sellingTest.reducer;
