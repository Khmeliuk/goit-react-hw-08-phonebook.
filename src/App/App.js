import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCurrentUser, fetchItems } from "../redux/operation";
import Nav from "../views/Nav";
import Vieews from "../views/views";
import UserMenu from "../components/UserMenu/UserMenu";
import { getisLogin } from "../contacts-selectors";
import SiteNav from "../views/siteNav";

export default function App() {
  const islogin = useSelector((state) => getisLogin(state));
  const isLoading = useSelector((state) => state.contacts.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  useEffect(() => {
    if (!isLoading) dispatch(fetchItems());
  }, [dispatch, isLoading]);

  return (
    <div>
      {islogin ? <UserMenu /> : <SiteNav />}

      <Nav />
      <Vieews />
    </div>
  );
}
