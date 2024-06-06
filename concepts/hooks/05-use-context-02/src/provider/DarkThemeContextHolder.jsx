import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export const useTheme = () => useContext(ThemeContext);
export const useThemeUpdate = () => useContext(ThemeUpdateContext);

function DarkThemeContextHolder({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme((theme) => !theme);
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

export default DarkThemeContextHolder;
