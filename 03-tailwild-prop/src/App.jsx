import "./App.css";

function App({ myArr, newMyArr }) {
  console.log(`Array: ${myArr} newArray: ${newMyArr}`);
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind CSS
      </h1>
    </>
  );
}

export default App;
