import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  // // 1. Only once when App component in loaded []
  // useEffect(() => {
  //   console.log("OnMount Invocation");
  // }, []);

  // // 2. this gets executed only when [resourceType] changes
  // useEffect(() => {
  //   console.log(`resourceType: ${resourceType}`);
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}/1`)
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }, [resourceType]);

  // 3. this gets executed only when [resourceType] changes
  // also has a cleanup function which runs before
  // useEffect(() => {
  //   console.log(`2. resourceType: ${resourceType}`);
  //   return () => {
  //     console.log(`1. return from ${resourceType}`);
  //   };
  // }, [resourceType]);

  useEffect(() => {
    // this gets executed only when [resourceType] changes
    console.log(`resourceType: ${resourceType}`);
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      <div>
        <button type="button" onClick={() => setResourceType("posts")}>
          Posts
        </button>
        <button type="button" onClick={() => setResourceType("users")}>
          Users
        </button>
        <button type="button" onClick={() => setResourceType("comments")}>
          Comments
        </button>
      </div>
      <h1>{resourceType}</h1>
      <p>Resource Response</p>
      {items.map((item) => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

export default App;
