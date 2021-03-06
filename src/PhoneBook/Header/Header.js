import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import authSelector from '../../redux/auth/authSelector';
import style from './Header.module.css';

const Header = () => {
  const isAuthenticated = useSelector(authSelector.getIsAuthentificated);

  return (
    <header className={style.nav}>
      <NavLink exact to={'/'} className={style.nav__link} activeClassName={style.active}>
        Home
      </NavLink>
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default Header;
