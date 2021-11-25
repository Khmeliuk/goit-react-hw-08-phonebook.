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
import { createReducer } from "@reduxjs/toolkit";

export const itemReducer = createReducer([], {
  [fetchContactSuccess]: (state, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    if (state.find((contact) => contact.name === payload.name)) {
      alert(`${payload.name} is already in contact`);
    } else return [...state, payload];
  },
  [deleteContactSuccess]: (state, { payload }) => {
    const arr = state.filter(({ id }) => payload !== id);
    return arr;
  },
});

export const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactSuccess]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
});
