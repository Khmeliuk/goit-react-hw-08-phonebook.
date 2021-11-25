import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      console.log(data, "data");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    console.log(data, "data");
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
