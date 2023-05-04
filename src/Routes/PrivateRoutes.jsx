import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Spinner from "../Pages/Shared/Spinner/Spinner";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { loading, user } = useContext(AuthContext);

  if (loading) {
    return <Spinner />;
  } else if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoutes;
