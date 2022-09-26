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
  cloudinaryImages: [],
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

// const getImgs = (formData) => {

// }

// export const fetchCloudinaryImgs = createAsyncThunk(
//   "sellingTest/setCloudinaryImgs",
//   // Declare the type your function argument here:
//   async (formData) => {
//     const promise = await getVinInfo(formData);
//     console.log(getImgs);
//     // Inferred return type: Promise<MyData>
//     return promise;
//   }
// );
// await store.dispatch(fetchUserById(3))

export const sellingTest = createSlice({
  name: "sellingTest",
  initialState,
  reducers: {
    setSellerImages: (state, action) => {
      state.images.push(action.payload);
    },
    setCloudinaryImages: (state, action) => {
      state.cloudinaryImages = [...action.payload];
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
    // builder.addCase(fetchCloudinaryImgs.fulfilled, (state, action) => {
    //   state.cloudinaryImages.push(action.payload);
    // });
  },
});

const { actions, reducer } = sellingTest;
// Action creators are generated for each case reducer function
export const { setSellerImages, setCloudinaryImages, setErrors } = actions;

export default reducer;
