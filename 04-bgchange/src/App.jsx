import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("skyblue");
  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            onClick={() => setColor("skyblue")}
            style={{ backgroundColor: "skyblue" }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
