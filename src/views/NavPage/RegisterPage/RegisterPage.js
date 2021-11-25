import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/operation";
import s from "./Registration.module.css";

const Register = () => {
  const dispatch = useDispatch();
  const initialization = {
    name: "",
    email: "",
    password: "",
  };
  const [form, setform] = useState(initialization);

  function onSubmit(e) {
    e.preventDefault();
    dispatch(register(form));
    console.log(form);
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
          name="name"
          onChange={handlerChange}
          type="text"
          placeholder="name"
          value={form.name}
        />
      </label>
      <label className={s.label} htmlFor="">
        <input
          className={s.input}
          autoComplete="off"
          name="email"
          onChange={handlerChange}
          type="text"
          placeholder="mail"
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
        registration
      </button>
    </form>
  );
};
export default Register;
