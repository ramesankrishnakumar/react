import { Profile, Sidebar } from "./Component";

function Dashboard() {
  return (
    <div style={{ border: "1px dotted black" }}>
      <section>
        <h3>Dashboard component doesn&apos;t use the context</h3>
      </section>
      <section>
        <div
          style={{
            display: "flex",
            rowGap: "100px",
          }}
        >
          <Sidebar />
          <Profile />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
