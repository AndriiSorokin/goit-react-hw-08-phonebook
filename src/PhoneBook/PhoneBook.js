import React, { useEffect } from 'react';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import { useDispatch } from 'react-redux';
import { fetchContact } from '../redux/contactOperations/contactOperations';

import style from '../PhoneBook/PhoneBook.module.css';

const PhoneBook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContact());
  }, []);
  return (
    <div className={style.container}>
      <h1>PhoneBook</h1>
      <Form />
      <Filter />
      <Contacts />
    </div>
  );
};

export default PhoneBook;
