import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contactOperations/contactOperations';

import contactSelector from '../redux/contactSelector/contactSelector';
import style from '../PhoneBook/PhoneBook.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactSelector.getVisibleUser);

  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <span>
              {contact.name} : {contact.phone}
            </span>
            <button
              className={style.btnDelete}
              onClick={() => dispatch(deleteContact(contact.id))}
              type="button"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
