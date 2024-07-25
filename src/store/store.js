import { configureStore } from "@reduxjs/toolkit";
import authSliceReducers from "../features/authSlice";

const store = configureStore({
  reducer: {
    authSliceReducers,
  },
});

export default store;
