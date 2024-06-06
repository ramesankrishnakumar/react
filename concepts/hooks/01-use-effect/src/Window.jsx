import React, { useEffect, useState } from "react";

function Window() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleWindoWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindoWidth);
    return () => {
      window.removeEventListener("resize", handleWindoWidth);
    };
  }, []);
  return <div>{windowWidth}</div>;
}

export default Window;
