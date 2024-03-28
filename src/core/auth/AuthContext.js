
import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const getLoginUser = () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log(decoded);
        return decoded.userId;
      } catch (error) {
        console.error("Error decoding token:", error);
        return undefined;
        // Handle token decoding errors or invalid token here
      }
    }
    return undefined
  }

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  const userCan = (requiredRole) => {
    console.log(getLoginUser());
    return getLoginUser()?.role?.permissions?.includes(requiredRole);
  };

  const userHave = (locationAllowed) => {
    return getLoginUser()?.role?.location_access?.includes(locationAllowed);
  };

  return (
    <AuthContext.Provider value={{ user: getLoginUser(), userCan, userHave, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
