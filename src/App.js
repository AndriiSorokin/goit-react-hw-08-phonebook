import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Header from './PhoneBook/Header/Header';
import { getCurrentUser } from './redux/auth/authOperation';

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
        <Route path={'/login'} component={Login} />
        <Route path={'/register'} component={Register} />
      </Switch>
    </>
  );
};

export default App;
