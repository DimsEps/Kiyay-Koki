import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element, ...rest }) => {
  const isAdmin = localStorage.getItem("isAdmin");

  return isAdmin === "true" ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
