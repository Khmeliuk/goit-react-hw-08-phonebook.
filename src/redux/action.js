import { createAction } from "@reduxjs/toolkit";

// export const deleteContact = createAction("delete");

export const filter = createAction("filter");

// export const addContact = createAction("AddContact");

export const addContactSuccess = createAction("addContactSuccess");
export const addContactRequest = createAction("addContactRequest");
export const addContactError = createAction("addContactError");

export const deleteContactSuccess = createAction("deleteContactSuccess");
export const deleteContactRequest = createAction("deleteContactRequest");
export const deleteContactError = createAction("deleteContactError");

export const fetchContactRequest = createAction("fetchContactRequest");
export const fetchContactSuccess = createAction("fetchContactSuccess");
export const fetchContactError = createAction("fetchContactError");
