const projectsList = [
  {
    projectName: "eCommerce Store",
  },
  {
    projectName: "Real Time Chat",
  },
  {
    projectName: "Portfolio",
  },
  {
    projectName: "IoT app",
  },
  {
    projectName: "Task Manager",
  },
];

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
          {projectsList.map((item) => (
            <ProjectCard projectName={item.projectName} />
          ))}
        </div>
      </div>
      <div>
        <span>Made with NextJS</span>
      </div>
    </div>
  );
}

const ProjectCard = (props) => {
  return (
    <div
      style={{
        height: "90px",
        width: "750px",
        padding: "5px",
        marginBottom: "3px",
        borderRadius: "10px",
        border: "2px solid black",
        backgroundColor: "black",
      }}
    >
      <span style={{ color: "#0c4a6e" }}>{props.projectName}</span>
    </div>
  );
};
