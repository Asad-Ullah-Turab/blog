import { configureStore } from "@reduxjs/toolkit";
import authSliceReducers from "../features/authSlice";

const store = configureStore({
  reducer: {
    auth: authSliceReducers,
  },
});

export default store;
