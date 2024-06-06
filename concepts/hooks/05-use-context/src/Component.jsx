import { useContext } from "react";
import { DashboardContext } from "./App";

export function Sidebar() {
  const user = useContext(DashboardContext);

  return (
    <div style={{ border: "1px solid blue" }}>
      <div>Sidebar uses the context</div>
      <div>{user.name}</div>
      <div>Subscription Status: {user.isSubscribed.toString()}</div>
    </div>
  );
}

export function Profile() {
  const user = useContext(DashboardContext);
  return (
    <div style={{ border: "1px solid blue" }}>
      <div>Profile uses the context</div>
      <div>{user.name}</div>
    </div>
  );
}
