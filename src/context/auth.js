import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Check if the user is authenticated on page load
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const savedAuth = localStorage.getItem("isAuthenticated");
    return savedAuth ? JSON.parse(savedAuth) : false;
  });

  const login = (username, password) => {
    // Hardcoded login credentials
    if (username === "9640600112" && password === "divyayadav") {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", true); // Save to localStorage
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated"); // Remove from localStorage
  };

  useEffect(() => {
    // Sync authentication status with localStorage on change
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
