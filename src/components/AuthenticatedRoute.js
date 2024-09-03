// src/components/AuthenticatedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const AuthenticatedRoute = ({ children, redirectTo = "/login" }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <Navigate to={redirectTo} replace />;
};

export default AuthenticatedRoute;
