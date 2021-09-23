import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

/**
 * Secured the profilePage when user is not logged, redirect to the homepage
 * @param {props} param
 * @returns props
 */
function PrivateRoute({ component: Component, ...rest }) {
  const hasToken = useSelector((state) => state.authentication.token);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!hasToken) {
          return <Redirect to="/" />;
        }
        return <Component {...props} />;
      }}
    />
  );
}

export { PrivateRoute };
