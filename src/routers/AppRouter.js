import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { startChecking } from '../actions/authActions';
import { LoginScreen } from '../components/auth/LoginScreen';
import { GetBusRoutes } from './GetBusRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, userId } = useSelector((state) => state.auth);

  useEffect(() => {
    if (checking) {
      dispatch(startChecking());
    }
  }, [dispatch, checking]);

  if (checking) {
    return <h5>Espere...</h5>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={!!userId}
          />
          <PrivateRoute
            exact
            path="/"
            component={GetBusRoutes}
            isAuthenticated={!!userId}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
