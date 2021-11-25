import { Route, Switch } from "react-router-dom";

import LoginPage from "./NavPage/LoginPage/LoginPage";

import Register from "./NavPage/RegisterPage/RegisterPage";
import Phonebook from "../components/phonebook/Phonebook";
import PrivetRoute from "../router/privetPage";
import PublicRout from "../router/PublicRoute";

const AppBar = () => {
  return (
    <Switch>
      <PrivetRoute exact path="/contacts">
        <Phonebook />
      </PrivetRoute>
      <PublicRout restricted exact path="/register">
        <Register />
      </PublicRout>
      <PublicRout restricted exact path="/login">
        <LoginPage />
      </PublicRout>
      <Route exact path="/" />
    </Switch>
  );
};
export default AppBar;
