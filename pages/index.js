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
          backgroundColor: "#0c4a6e",
        }}
      >
        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Adithya Pantangi
        </span>
        {/* Profile Card */}
        <div
          style={{
            display: "flex",
            width: "600px",
            height: "500px",
            marginBottom: "100px",
            borderRadius: "10px",
            border: "3px solid black",
          }}
        >
          <div style={{ flex: 1.5 }}>
            <span>Profile Card</span>
          </div>

          <div
            style={{
              flex: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              borderRadius: "10px",
              // backgroundColor: "whitesmoke",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>{`Hi There! `} </span>
            <span
              style={{ fontSize: "1.25rem" }}
            >{`I am a full stack developer from Hyderabad.`}</span>

            <span>{`Some of the projects I've worked on`}</span>
          </div>
        </div>
        <span>Made with NextJS</span>
      </section>
      {/* <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0c4a6e",
        }}
      >
        Hello World
      </section> */}
    </main>
  );
}
