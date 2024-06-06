import { createContext, useState } from "react";
import ThemePropsComponent from "./component/ThemePropsComponent";
import ThemeContextComponent from "./component/ThemeContextComponent";
import DarkThemeContextHolder from "./provider/DarkThemeContextHolder";
import SimpleThemeContextComponent from "./component/SimpleThemeContextComponent";

export const ThemeContext = createContext();

function App() {
  const [darkThemeProp, setDarkThemeProp] = useState(false);

  const [darkThemeContext, setDarkThemeContext] = useState(false);

  const toggleThemeProp = () => setDarkThemeProp((theme) => !theme);

  const toggleThemeContext = () => setDarkThemeContext((theme) => !theme);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        columnGap: "50px",
      }}
    >
      <div>
        <button onClick={toggleThemeProp}>Toggle Theme</button>
        <ThemePropsComponent darkTheme={darkThemeProp} />
      </div>

      <div>
        <ThemeContext.Provider value={darkThemeContext}>
          <button onClick={toggleThemeContext}>Toggle Theme</button>
          <ThemeContextComponent />
        </ThemeContext.Provider>
      </div>
      <div>
        <DarkThemeContextHolder>
          <SimpleThemeContextComponent></SimpleThemeContextComponent>
        </DarkThemeContextHolder>
      </div>
    </div>
  );
}

export default App;
