import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../redux/actions/user-action';
import style from '../PhoneBook/PhoneBook.module.css';
import contactSelector from '../redux/contactSelector/contactSelector';

const Filter = () => {
  const value = useSelector(contactSelector.getFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={style.form}>
      <p>Find contact by name</p>
      <input type="text" placeholder="Find" value={value} onChange={onChange} />
    </div>
  );
};

export default Filter;
