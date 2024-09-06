import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginStatus: false,
  userData: null,
  profileData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.loginStatus = true;
      state.userData = action.payload.userData;
      state.profileData = action.payload.profileData;
    },
    logout: (state) => {
      state.loginStatus = false;
      state.userData = null;
      state.profileData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
