import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelector';

const PublicRoute = ({ component: Component, isAuthenticated, redirectTo, ...routeProps }) => {
  const isAuthenticate = useSelector(authSelectors.getIsAuthentificated);
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticate && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
