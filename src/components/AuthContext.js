// src/contexts/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize isLoggedIn from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem('isAuthenticated') === 'true'
  );

  useEffect(() => {
    // Whenever isLoggedIn changes, update localStorage
    localStorage.setItem('isAuthenticated', isLoggedIn);
  }, [isLoggedIn]);

  const login = () => setIsLoggedIn(true);
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isAuthenticated'); // Clear authentication status
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
