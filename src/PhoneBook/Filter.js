import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../redux/actions/user-action';
import style from '../PhoneBook/PhoneBook.module.css';
import contactSelector from '../redux/contactSelector/contactSelector';

const Filter = ({ value, onChange }) => {
  return (
    <div className={style.form}>
      <p>Find contact by name</p>
      <input type="text" placeholder="Find" value={value} onChange={onChange} />
    </div>
  );
};

const mapStatetoProps = state => ({
  value: contactSelector.getFilter(state),
});
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStatetoProps, mapDispatchToProps)(Filter);
