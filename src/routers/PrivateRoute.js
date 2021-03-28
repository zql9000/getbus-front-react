import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navbar } from '../components/ui/Navbar';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  localStorage.setItem('lastPath', rest.location.pathname);

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <>
            <Navbar />
            <Component {...props} />
          </>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
