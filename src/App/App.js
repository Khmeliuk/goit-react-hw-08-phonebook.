import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCurrentUser } from "../redux/authRedax/outhOperation";
import Nav from "../views/Nav";
import { fetchItems } from "../redux/operation";
import UserMenu from "../components/UserMenu/UserMenu";
import { getisLogin } from "../redux/authRedax/outh-selector";
import SiteNav from "../views/siteNav";
import AppBar from "../views/views";
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
      <AppBar />
    </div>
  );
}
