export default function projects() {
  return (
    <div
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        Adithya Pantangi
      </span>

      <div
        style={{
          marginBottom: "300px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span style={{ fontWeight: 600, fontSize: "50px" }}>Projects </span>
        <span style={{ fontWeight: 600 }}>Coming Soon!</span>
      </div>
    </div>
  );
}
