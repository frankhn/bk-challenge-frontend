import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({
  component: Component,
  isAuthProtected,
  ...rest
}: any) => (
    <Route
      {...rest}
      render={(props: any) => {
        if (isAuthProtected && !sessionStorage.getItem('authUser')) {
          return (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          );
        }

        return (
          <Fragment>
            <Component {...props} />
          </Fragment>
        );
      }}
    />
  );

export default ProtectedRoute;
