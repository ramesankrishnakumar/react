import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Card from "./components/Card.jsx";

// how to pass an array
let newMyArr = [1, 2, 3];
// how to pass an object
let person = {
  fullName: "KK Ramesan",
  phone: "+1 111-112-2344",
  email: "abc@example.com",
  address: {
    street: "pal street",
    city: "New York",
    country: "India",
  },
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App myArr={[1, 2, 3]} newMyArr={newMyArr} />
    <Card username="Hitesh" position="Staff Engineer, Intuit" person={person} />
    <Card username="KK" />
    <Card position="Sr Engineer, Intuit" />
  </React.StrictMode>
);
