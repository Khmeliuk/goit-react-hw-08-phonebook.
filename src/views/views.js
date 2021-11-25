import { Route, Routes } from "react-router-dom";
import HomePage from "./NavPage/HomePage/HomePage";
import LoginPage from "./NavPage/LoginPage/LoginPage";
import Contact from "./NavPage/ContactsPage/ContactsPage";
import Register from "./NavPage/RegisterPage/RegisterPage";
import Phonebook from "../components/phonebook/Phonebook";
const AppBar = () => {
  return (
    <Routes>
      {/* <Route exact path="/" element={< />} /> */}
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/contacts" element={<Phonebook />} />
      {/* <Navigate to="/" /> */}
    </Routes>
  );
};
export default AppBar;
