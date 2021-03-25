import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../redux/contactOperations/contactOperations';
import contactSelector from '../redux/contactSelector/contactSelector';
import style from '../PhoneBook/PhoneBook.module.css';

const Contacts = ({ contacts, deleteNumber }) => {
  console.log(contacts);
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
              onClick={() => deleteNumber(contact.id)}
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

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }),
  ).isRequired,
  deleteNumber: PropTypes.func.isRequired,
};

const mapStatetoProps = state => ({
  contacts: contactSelector.getVisibleUser(state),
});

const mapDispatchToProps = dispatch => ({
  deleteNumber: id => dispatch(deleteContact(id)),
});
export default connect(mapStatetoProps, mapDispatchToProps)(Contacts);
