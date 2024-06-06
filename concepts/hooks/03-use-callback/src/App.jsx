import { useCallback, useState } from "react";

import { shuffle } from "lodash";

import Search from "./Search";

const allUsers = ["john", "alex", "george", "simon", "james"];

function App() {
  const [users, setUsers] = useState(allUsers);

  // without useCallback eventhough the function logic doesn't change, on each render react regenerate the function so the referential equality fails
  const handleSearch = useCallback(
    (text) => {
      console.log(users[0]);
      const filteredUsers = allUsers.filter((user) => user.includes(text));
      setUsers(filteredUsers);
    },
    [users] // if user dependency is not provided callback function will have a cached version of users
  );

  return (
    <div className="tutorial">
      <div className="align-center mb-2 flex">
        <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>

        <Search onChange={handleSearch} />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
