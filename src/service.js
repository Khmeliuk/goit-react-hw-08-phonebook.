import axios from "axios";

export const allContacts = () => {
  return axios.get("/contacts").then((res) => res.data);
};
