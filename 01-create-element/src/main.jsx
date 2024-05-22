import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const anchorElement = {
  type: "a",
  props: {
    target: "_blank",
    href: "https://google.com",
  },
  children: "visit google.com",
};

function CustomElement() {
  return React.createElement(
    anchorElement.type,
    anchorElement.props,
    anchorElement.children
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <CustomElement />
  </>
);
