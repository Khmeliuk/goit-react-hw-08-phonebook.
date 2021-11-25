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
