import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <ThemeContext.Provider value={[isDarkTheme, setIsDarkTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
