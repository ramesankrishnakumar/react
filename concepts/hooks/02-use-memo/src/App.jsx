import { useState, useMemo } from "react";
import { initialItems } from "./utils";

function App() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  // This is an expensive operation which gets executed when this component is re-rendered
  // const selectedItem = items.find((item) => {
  //   return item.isSelected ? true : false;
  // });

  // using memoization to improve the performance

  // const selectedItem = useMemo(
  //   () => items.find((item) => item.id === 29_999_998),
  //   [items]
  // );

  // adding the correct set of dependencies
  const selectedItem = useMemo(
    () => items.find((item) => item.id === count),
    [count, items]
  );

  return (
    <div className="tutorial">
      <h1>Count: {count}</h1>
      <h1>Selected ItemId: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
