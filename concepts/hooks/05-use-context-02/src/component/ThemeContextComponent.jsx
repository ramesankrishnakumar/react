import { useContext } from "react";
import { ThemeContext } from "../App";

function ThemeContextComponent() {
  const darkTheme = useContext(ThemeContext);
  const styleVal = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
  };
  return (
    <div style={styleVal}>
      <h1>Context Component</h1>
    </div>
  );
}

export default ThemeContextComponent;
