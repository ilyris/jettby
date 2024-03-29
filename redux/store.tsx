import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createReduxStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: [thunk],
  });
  const persistor = persistStore(store);
  return { store, persistor };
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const { store, persistor } = createReduxStore();
