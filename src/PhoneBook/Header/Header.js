import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import style from './Header.module.css';

// import { logOut } from '../../redux/operations/auth';

const Header = ({ isAuthenticated }) => {
  // const token = useSelector(state => state.token);
  // const dispatch = useDispatch();

  // const logout = () => {
  //   dispatch(logOut(token));
  // };
  return (
    <header className={style.nav}>
      <NavLink exact to={'/'} className={style.nav__link} activeClassName={style.active}>
        Home
      </NavLink>
      {isAuthenticated ? <UserMenu /> : <AuthNav />}

      {/* <button onClick={logout}>Log Out</button> */}
    </header>
  );
};

export default Header;
