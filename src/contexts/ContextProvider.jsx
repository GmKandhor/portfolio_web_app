import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [darkMode , setDarkMode] = useState(false)
  return (
  
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
       darkMode,
       setDarkMode
      }}
    >
      {children}
    </StateContext.Provider>
  
  );
};

export const useStateContext = () => useContext(StateContext);
