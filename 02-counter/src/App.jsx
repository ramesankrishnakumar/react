import { useState } from "react";

function App() {
  const [stateCounter, setCounter] = useState(15);

  function addValue() {
    let incrementedValue = stateCounter + 1;
    setCounter(incrementedValue);
  }
  const reduceValue = () => {
    let reducedValue = stateCounter - 1;
    setCounter(reducedValue);
  };

  return (
    <>
      <h1>React course with Hitesh {stateCounter}</h1>
      <h2>Counter Value: {stateCounter}</h2>
      <button onClick={addValue}>Add Value</button>&nbsp;
      <button onClick={reduceValue}>Remove Value</button>
      <p>footer: {stateCounter}</p>
    </>
  );
}

export default App;
