import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register, fetchCurrentUser } from "./operation";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogging: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogging = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.user = payload.user;
      state.token = payload.token;
      state.isLogging = true;
    },
    [logout.fulfilled]: (state, { payload }) => {
      state.user = { name: null, email: null };
      state.token = "";
      state.isLogging = false;
    },
    [fetchCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLogging = true;
    },
  },
});
