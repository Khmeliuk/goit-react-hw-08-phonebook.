import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";
const Nav = () => {
  return (
    <nav>
      {" "}
      <ul className={s.nav}>
        <li className={s.link}>
          <NavLink
            // activeClassName={s.active}
            className={s.navLink}
            to={"/"}
          >
            <p className={s.text}>Home</p>
          </NavLink>
        </li>
        <li className={s.link}>
          <NavLink
            // activeClassName={s.active}
            className={s.navLink}
            to={"/contacts "}
          >
            <p className={s.text}>contacts</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
