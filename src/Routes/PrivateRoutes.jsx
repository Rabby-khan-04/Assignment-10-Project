import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Spinner from "../Pages/Shared/Spinner/Spinner";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <Spinner />;
  } else if (user) {
    return children;
  } else {
    return <Navigate state={{ from: location }} to="/login" />;
  }
};

export default PrivateRoutes;
