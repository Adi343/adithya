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
          // marginBottom: "30%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <span style={{ fontWeight: 600, fontSize: "50px" }}>Projects </span>
        <span style={{ fontWeight: 600 }}>Coming Soon!</span> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ProjectCard />
          <div
            style={{
              display: "flex",
            }}
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <CustomButton item={item} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <span>Made with NextJS</span>
      </div>
    </div>
  );
}

const ProjectCard = () => {
  return (
    <div
      style={{
        height: "110px",
        width: "750px",
        borderRadius: "10px",
        border: "2px solid black",
      }}
    >
      <span>Hello World</span>
    </div>
  );
};

const CustomButton = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "30px",
        height: "30px",
        border: "3px solid black",
        borderRadius: "20px",
        margin: "3px",
      }}
    >
      <span style={{}}>{props.item}</span>
    </div>
  );
};
