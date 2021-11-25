import { useEffect, useState } from "react";

const RegistrationForn = () => {
  const initialization = {
    name: "",
    password: "",
    mail: "",
  };
  const [form, setform] = useState(initialization);

  function onSubmit(e) {
    e.preventDefault();
  }

  function handlerChange(e) {
    const { name, value } = e.target;
    setform({ ...form, name: value });
  }
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="">
        <input
          name="name"
          onChange={handlerChange}
          type="text"
          placeholder="name"
          value={form.name}
        />
      </label>
      <label htmlFor="">
        <input
          name="mail"
          onChange={handlerChange}
          type="mail"
          placeholder="mail"
          value={form.mail}
        />
      </label>
      <label htmlFor="">
        <input
          name="password"
          onChange={handlerChange}
          type="password"
          placeholder="password"
          value={form.password}
        />
      </label>
      <button type="submit" onClick={onSubmit}>
        registration
      </button>
    </form>
  );
};
