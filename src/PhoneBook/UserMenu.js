import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/auth/authOperation';
import authSelector from '../redux/auth/authSelector';
import Phonebook from './PhoneBook';

const styles = {
  name: {
    color: '#fff',
    textDecoration: 'none',
    padding: 20,
    fontSize: 20,
    fontWeight: 700,
    margin: '0 40',
  },
  btn: {
    width: 90,
    height: 30,
  },
  wrapper: {
    marginLeft: 'auto',
  },
};

const UserMenu = () => {
  const tkn = useSelector(state => state.auth.token);
  const user = useSelector(authSelector.getUser);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut(tkn));
  };
  return (
    <div style={styles.wrapper}>
      <span style={styles.name}>Welcome, {user.email} </span>
      <button style={styles.btn} onClick={logout}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
