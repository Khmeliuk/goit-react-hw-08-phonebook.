import { useEffect, useState } from "react";
import Section from "../section/Section";
import s from "./Phonebook.module.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addContact, fetchItems } from "../../redux/operation";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";
import ReactLoading from "react-loading";

export default function Phonebook() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const isLoading = useSelector((state) => state.contacts.loading);

  function HandleInputChange(e) {
    switch (e.currentTarget.name) {
      case "name":
        setName(e.currentTarget.value);
        setId(uuidv4());
        break;
      case "number":
        setNumber(e.currentTarget.value);
        setId(uuidv4());
        break;
      default:
        return;
    }
  }

  function HandleSubmitButton(e) {
    e.preventDefault();
    dispatch(addContact({ name, number, id }));
    reset();
  }

  function reset() {
    setName("");
    setNumber("");
    setId("");
  }

  const buble = {
    prop: "spinningBubbles",
    name: "SpinningBubbles",
  };

  return (
    <div className={s.phonebook}>
      <Section title="Phonebook" />
      <form className={s.form} onSubmit={HandleSubmitButton}>
        <label className={s.label} htmlFor="name">
          <p className={s.labelName}>Name</p>
          <input
            className={s.input}
            onChange={HandleInputChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
          <p className={s.labelName}>Number</p>
          <input
            className={s.input}
            value={number}
            onChange={HandleInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
          <button className={s.button} type="submit">
            Add contact
          </button>
        </label>
      </form>
      <Section title="Contacts">
        <Filter />
        <ContactList />
        {isLoading && (
          <ReactLoading
            type={buble.prop}
            color={"#2b2c6d"}
            height={100}
            width={100}
          />
        )}
      </Section>
    </div>
  );
}
