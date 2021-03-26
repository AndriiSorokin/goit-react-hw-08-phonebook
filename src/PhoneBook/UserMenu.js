import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/auth/authOperation';

const UserMenu = () => {
  const tkn = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut(tkn));
  };
  return (
    <div>
      <span>Welcome, </span>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default UserMenu;
