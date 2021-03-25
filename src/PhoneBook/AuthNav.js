import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    padding: 20,
    fontSize: 25,
    fontWeight: 700,
    margin: '0 40',
  },
  activeLink: {
    color: '#000',
  },
  wrapper: {
    marginLeft: 'auto',
  },
};
const AuthNav = () => {
  return (
    <div style={styles.wrapper}>
      <NavLink to={'/login'} style={styles.navLink} activeStyle={styles.activeLink}>
        Login
      </NavLink>
      <NavLink to={'/register'} style={styles.navLink} activeStyle={styles.activeLink}>
        Registration
      </NavLink>
    </div>
  );
};

export default AuthNav;
