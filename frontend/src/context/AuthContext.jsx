import React, { createContext } from 'react';

// Create and export the context
export const authDataContext = createContext();

function authContext({ children }) {
  // Use environment variable for server URL (falls back to localhost for development)
  const serverUrl = import.meta.env.VITE_SERVER_URL || "http://localhost:3000"; 

  const value = {
    serverUrl,
  };

  return (
    // ✅ FIXED: Removed unnecessary <div> wrapper
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  );
}

export default authContext;

