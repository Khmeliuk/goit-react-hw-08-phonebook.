import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { getisLogin } from "../redux/authRedax/outh-selector";

const PublicRout = ({ children, restricted = false, routProp }) => {
  const isLogin = useSelector(getisLogin);
  const shouldRedirect = isLogin && restricted;
  return (
    <Route {...routProp}>
      {shouldRedirect ? <Redirect to="/" /> : children}
    </Route>
  );
};
export default PublicRout;
