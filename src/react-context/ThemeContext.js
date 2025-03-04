import React, { createContext, useState } from "react";

/**
 * The createContext API in React is used for state management and allows data to be passed
 *  down the component tree without having to pass props manually at every level. 
 * It is commonly used for themes, authentication, or global state management.
 */
// Create a context
const ThemeContext = createContext();

// Create a Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;