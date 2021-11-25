import { createSelector } from "reselect";

export const getFilter = (state) => state.contacts.filter;
export const getContacts = (state) => state.contacts.items;
export const getIsLoggierIn = (state) => state.contacts.si;
export const getUserName = (state) => state.auth.user.name;
export const getUserEmail = (state) => state.auth.user.email;

export const getisLogin = (state) => state.auth.isLogging;

export const getFilterContact = createSelector(
  [getFilter, getContacts],
  (filter, contact) => {
    const filterNormalized = filter.toLowerCase();
    return contact.filter(({ name }) =>
      name.toLowerCase().includes(filterNormalized)
    );
  }
);
