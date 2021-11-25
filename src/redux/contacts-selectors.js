import { createSelector } from "reselect";

export const getFilter = (state) => state.contacts.filter;
export const getContacts = (state) => state.contacts.items;
export const getIsLoggierIn = (state) => state.contacts.isLogging;

export const getFilterContact = createSelector(
  [getFilter, getContacts],
  (filter, contact) => {
    const filterNormalized = filter.toLowerCase();
    return contact.filter(({ name }) =>
      name.toLowerCase().includes(filterNormalized)
    );
  }
);
