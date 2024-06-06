import { useEffect, useCallback, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordStorage = useRef(null);

  function updatePasswordLength(event) {
    let newState = event.target.value;
    console.log(`passwordLength: ${newState}`);
    setLength(newState);
  }
  /*
    This is using callback for setter methods to ensure we have a updated value
   */
  function updateCharacterAllowed(event) {
    console.log(
      `checkedEvent: ${event.target.checked}, checkedState: ${charAllowed}`
    );

    setCharAllowed((prevState) => !prevState);
  }

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(passwordStorage.current.value);
    passwordStorage.current.select();
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordStorage}
        />
        <button
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyPassword}
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            name=""
            id=""
            onChange={updatePasswordLength}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            name=""
            id=""
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          {/* <label htmlFor="number">Numbers: {numberAllowed.toString()}</label> */}
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            name=""
            id=""
            onChange={updateCharacterAllowed}
          />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
