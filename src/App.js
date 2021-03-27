import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Header from './PhoneBook/Header/Header';
import { getCurrentUser } from './redux/auth/authOperation';
import PrivateRoute from './PhoneBook/PrivateRoute';
import PublicRoute from './PhoneBook/PublicRoute';
import PhoneBook from './PhoneBook/PhoneBook';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path={'/'} component={Home} />
        <PublicRoute path={'/login'} restricted redirectTo={'/contacts'} component={Login} />
        <Route path={'/register'} restricted component={Register} redirectTo={'/contacts'} />
        <PrivateRoute path={'/contacts'} component={PhoneBook} redirectTo="/login" />
      </Switch>
    </>
  );
};

export default App;
