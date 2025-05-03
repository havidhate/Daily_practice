import React, { useState, createContext } from "react";

export const DataContext = createContext();

// Provider component
export function DataProvider({ children }) {
  const [state, setState] = useState(0); // Now being used
  function count() {
    setState((prev) => prev + 1);
  }

  return (
    <DataContext.Provider value={{ state, count }}>
      {children}
    </DataContext.Provider>
  );
}
