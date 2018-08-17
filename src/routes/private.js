import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={renderProps =>
      localStorage.getItem("tokenID") ? (
        <Component {...renderProps} />
      ) : (
        <Redirect to={{ pathname: "/" }} />
      )
    }
  />
);

export default PrivateRoute;
