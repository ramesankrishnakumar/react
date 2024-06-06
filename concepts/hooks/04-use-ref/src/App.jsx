import { useEffect, useRef } from "react";

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = "Type Here!!!!";
    inputRef.current.focus();
    inputRef.current.select();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
    </div>
  );
}

export default App;
