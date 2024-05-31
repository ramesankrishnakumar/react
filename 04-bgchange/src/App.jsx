import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#ff0000");

  function colorPicker(event) {
    setColor(event.target.value);
    document.getElementById("pickColor").value = event.target.value;
  }
  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            onClick={() => setColor("#BAB86C")}
            style={{ backgroundColor: "#BAB86C" }}
          >
            Olive
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            onClick={() => setColor("#00ff00")}
            style={{ backgroundColor: "#00ff00" }}
          >
            Green
          </button>
          <input type="color" onChange={colorPicker} id="pickColor" />
          <label htmlFor="pickColor">Choose background color</label>
        </div>
      </div>
    </div>
  );
}

export default App;
