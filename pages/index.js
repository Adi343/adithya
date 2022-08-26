export default function Home() {
  return (
    <main>
      <section
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#075985",
        }}
      >
        Hello World
        <span>Test</span>
      </section>
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "red",
        }}
      >
        Hello World
      </section>
    </main>
  );
}
