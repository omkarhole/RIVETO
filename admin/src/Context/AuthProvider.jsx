// context/AuthContext.jsx
import React, { createContext } from 'react';

export const authDataContext = createContext();

function AuthProvider({ children }) {
  // Use environment variable for server URL (falls back to localhost for development)
  const serverUrl = import.meta.env.VITE_SERVER_URL || "http://localhost:3000"; 

  const value = { serverUrl };

  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  );
}

export default AuthProvider;
