import { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../../../redux/authRedax/outhOperation";
import s from "./Login.module.css";

const LoginPage = () => {
  const initialization = {
    password: "",
    email: "",
  };
  const [form, setform] = useState(initialization);
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    dispatch(login(form));
    setform(initialization);
  }

  function handlerChange(e) {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  }
  return (
    <form className={s.forum} onSubmit={onSubmit}>
      <label className={s.label} htmlFor="">
        <input
          className={s.input}
          name="email"
          onChange={handlerChange}
          type="text"
          placeholder="email"
          value={form.mail}
        />
      </label>
      <label className={s.label} htmlFor="">
        <input
          className={s.input}
          name="password"
          onChange={handlerChange}
          type="password"
          placeholder="password"
          value={form.password}
        />
      </label>
      <button className={s.button} type="submit" onClick={onSubmit}>
        login
      </button>
    </form>
  );
};
export default LoginPage;
