import React, { Component, useEffect } from 'react';
import Form from './Form';
import Contacts from './Contacts';
import { connect } from 'react-redux';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContact } from '../redux/contactOperations/contactOperations';
import contactSelector from '../redux/contactSelector/contactSelector';
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

const mapDispatchToProps = dispatch => ({
  fetchNumber: () => dispatch(fetchContact()),
});

export default connect(null, mapDispatchToProps)(PhoneBook);
