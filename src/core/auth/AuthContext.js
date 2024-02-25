
import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // const token = ''
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwicm9sZXMiOlsiYWRtaW4iXSwiaWF0IjoxNTE2MjM5MDIyfQ.ItUt9bHJO9XPiwClcP8RvWY3JqsnXOkIg2Mxnyk4aX4';
    if (token) {
      try {
        const decoded = jwtDecode(token); 
        console.log(decoded);
        setUser(decoded);
      } catch (error) {
        console.error("Error decoding token:", error);
        // Handle token decoding errors or invalid token here
      }
    }
  }, []);

  const userCan = (requiredRole) => {
    return user?.roles?.includes(requiredRole);
  };

  return (
    <AuthContext.Provider value={{ user, userCan }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
