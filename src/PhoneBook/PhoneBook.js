import React, { Component } from 'react';
import Form from './Form';
import Contacts from './Contacts';
import { connect } from 'react-redux';
import Filter from './Filter';
import { fetchContact } from '../redux/contactOperations/contactOperations';
import contactSelector from '../redux/contactSelector/contactSelector';
import style from '../PhoneBook/PhoneBook.module.css';

class PhoneBook extends Component {
  state = {
    contacts: [],
  };
  componentDidMount() {
    this.props.fetchNumber();
  }
  render() {
    const contact = this.props;
    console.log(contact);
    return (
      <div className={style.container}>
        <h1>PhoneBook</h1>
        <Form />
        <Filter />
        <Contacts />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  fetchNumber: () => dispatch(fetchContact()),
});

const mapStatetoProps = state => ({
  contact: contactSelector.getVisibleUser(state),
});
export default connect(mapStatetoProps, mapDispatchToProps)(PhoneBook);
