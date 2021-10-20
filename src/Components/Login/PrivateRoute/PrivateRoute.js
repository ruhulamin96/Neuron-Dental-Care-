import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";
import "./PrivateRoute.css";
function PrivateRoute({ children, ...rest }) {
  const { users, isLoading } = useAuth();
  if (isLoading) {
    return (
      <>
        <div className="spinner fs-1">
          <i class="fa fa-spinner fa-spin"></i>
        </div>
      </>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        users?.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
}

export default PrivateRoute;
