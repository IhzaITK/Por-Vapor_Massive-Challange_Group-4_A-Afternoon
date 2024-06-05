import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children, roles }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (roles && roles.indexOf(user.role) === -1) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
