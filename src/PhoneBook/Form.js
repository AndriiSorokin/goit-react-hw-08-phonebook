import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToList } from '../redux/contactOperations/contactOperations';
import contactSelector from '../redux/contactSelector/contactSelector';
import style from '../PhoneBook/PhoneBook.module.css';

class Form extends Component {
  state = {
    name: '',
    phone: '',
  };

  inputHandler = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  submitHandler = e => {
    e.preventDefault();
    const { name } = this.state;
    const { contacts } = this.props;

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is alredy contact!`);
      this.reset();
      return;
    } else {
      this.props.onSubmit(this.state);
      this.reset();
    }
  };

  reset = () => {
    this.setState({
      name: '',
      phone: '',
    });
  };

  render() {
    const { name, phone } = this.state;
    return (
      <form className={style.form} onSubmit={this.submitHandler} autoComplete="off">
        <input
          onChange={this.inputHandler}
          placeholder="Enter name"
          type="text"
          name="name"
          value={name}
        ></input>
        <input
          onChange={this.inputHandler}
          placeholder="Enter phone"
          type="text"
          name="phone"
          value={phone}
        ></input>
        <button className={style.btn} type="submit">
          Add contacts
        </button>
      </form>
    );
  }
}

const mapStatetoProps = state => ({
  contacts: contactSelector.getVisibleUser(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: payload => dispatch(addToList(payload)),
});
export default connect(mapStatetoProps, mapDispatchToProps)(Form);
