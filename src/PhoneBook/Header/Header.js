import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { logOut } from '../../redux/operations/auth';
import style from './Header.module.css';

const Header = () => {
  // const token = useSelector(state => state.token);
  // const dispatch = useDispatch();

  // const logout = () => {
  //   dispatch(logOut(token));
  // };
  return (
    <header className={style.nav}>
      <NavLink to={'/'} className={style.nav__link}>
        Home
      </NavLink>
      <NavLink to={'/login'} className={style.nav__link}>
        Login
      </NavLink>
      <NavLink to={'/register'} className={style.nav__link}>
        Registration
      </NavLink>

      {/* <button onClick={logout}>Log Out</button> */}
    </header>
  );
};

export default Header;
