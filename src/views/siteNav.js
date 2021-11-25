import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";
export default function SiteNav() {
  return (
    <ul className={s.nav}>
      {" "}
      <li className={s.link}>
        <NavLink
          // activeClassName={s.active}
          className={s.navLink}
          to={"/register"}
        >
          <p className={s.text}>registration</p>
        </NavLink>
      </li>
      <li className={s.link}>
        <NavLink
          // activeClassName={s.active}
          className={s.navLink}
          to={"./login"}
        >
          <p className={s.text}>login</p>
        </NavLink>
      </li>
    </ul>
  );
}
