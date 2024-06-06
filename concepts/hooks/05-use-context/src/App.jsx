import { useState, createContext } from "react";
import Dashboard from "./Dashboard";

export const DashboardContext = createContext(undefined);

function App() {
  const [user] = useState({
    isSubscribed: true,
    name: "You",
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        columnGap: "50px",
        border: "1px solid black",
      }}
    >
      <div style={{ margin: "10px", border: "1px solid black" }}>
        <h3>App component creates and sets the context for sub-components</h3>
      </div>

      <div style={{ margin: "10px", border: "1px solid black" }}>
        <DashboardContext.Provider value={user}>
          <Dashboard />
        </DashboardContext.Provider>
      </div>
    </div>
  );
}

export default App;
