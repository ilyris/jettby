import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import sellingTest from "./features/selling/selling";

import thunkMiddleware from "redux-thunk";

const store = configureStore({
  reducer: {
    rootReducer,
    sellingTest: sellingTest,
  },
  devTools: true,
  middleware: [thunkMiddleware],
});

export default store;
