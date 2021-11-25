import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  addContactError,
  addContactSuccess,
  addContactRequest,
  deleteContactSuccess,
  deleteContactRequest,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from "./action";

// axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const fetchItems = () => (dispatch) => {
  dispatch(fetchContactRequest);

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch((error) => dispatch(fetchContactError(error)));
};

export const addContact = (data) => (dispatch) => {
  dispatch(addContactRequest());

  axios
    .post("contacts", data)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`contacts/${id}`, id)
    .then(() => dispatch(deleteContactSuccess({ id })))
    .catch((error) => dispatch(deleteContactError(error)));
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
