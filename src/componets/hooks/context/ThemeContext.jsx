import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeApp = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeApp;

