import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./api/baseApi";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    userSlice: userSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
