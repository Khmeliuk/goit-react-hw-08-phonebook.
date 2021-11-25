import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserEmail } from "../../contacts-selectors";
import { logout } from "../../redux/operation";
import s from "./User.module.css";
const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => getUserEmail(state));

  return (
    <div className={s.container}>
      <p>{email}</p>
      <button
        className={s.button}
        onClick={() => dispatch(logout())}
        type="button"
      >
        logout
      </button>
    </div>
  );
};
export default UserMenu;
