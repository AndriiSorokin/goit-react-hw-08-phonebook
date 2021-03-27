import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToList } from '../redux/contactOperations/contactOperations';
import { getAllContact } from '../redux/contactSelector/contactSelector';
import style from '../PhoneBook/PhoneBook.module.css';

const initialState = {
  name: '',
  number: '',
};
const Form = () => {
  const contacts = useSelector(state => getAllContact(state));
  const dispatch = useDispatch();
  const [form, setForm] = useState({ ...initialState });

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setForm(state => ({ ...state, [name]: value }));
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log('hello');
    if (contacts.find(contact => contact.name === form.name)) {
      alert(`${form.name} is alredy contact!`);
      return;
    } else {
      dispatch(addToList(form));
      setForm({ ...initialState });
    }
  };

  return (
    <form className={style.form} onSubmit={submitHandler} autoComplete="off">
      <input
        onChange={inputHandler}
        placeholder="Enter name"
        type="text"
        name="name"
        value={form.name}
      ></input>
      <input
        onChange={inputHandler}
        placeholder="Enter phone"
        type="text"
        name="number"
        value={form.number}
      ></input>
      <button className={style.btn} type="submit">
        Add contacts
      </button>
    </form>
  );
};

export default Form;
