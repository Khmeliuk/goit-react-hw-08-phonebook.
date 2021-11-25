import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getisLogin } from "../redux/authRedax/outh-selector";

export default function PrivetRoute({ children, ...routeProps }) {
  const isLogin = useSelector(getisLogin);
  console.log(children, "isLogin");
  return (
    <Route {...routeProps}>
      {!isLogin ? <Redirect to="/login" /> : children}
    </Route>
  );
}
