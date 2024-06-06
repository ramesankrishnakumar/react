import { useTheme, useThemeUpdate } from "../provider/DarkThemeContextHolder";

function SimpleThemeContextComponent() {
  const styleVal = {
    backgroundColor: useTheme() ? "black" : "white",
    color: useTheme() ? "white" : "black",
  };
  const toggleTheme = useThemeUpdate();
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={styleVal}>
        <h1>Simple Context Component</h1>
      </div>
    </>
  );
}

export default SimpleThemeContextComponent;
