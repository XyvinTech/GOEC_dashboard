
import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const getLoginUser = () => {
    const token = localStorage.getItem('token');
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwicm9sZXMiOlsiYWRtaW4iXSwiaWF0IjoxNTE2MjM5MDIyfQ.ItUt9bHJO9XPiwClcP8RvWY3JqsnXOkIg2Mxnyk4aX4';
    if (token) {
      try {
        const decoded = jwtDecode(token);
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
