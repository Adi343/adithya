const projectsList = [
  {
    projectName: "Live Chat",
    projectDescription:
      "Chat application to show live chat like apps such as YouTube,Twitch etc",
  },
  {
    projectName: "Portfolio",
    projectDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis justo enim, a eleifend libero venenatis vitae. Vestibulum lobortis sodales mauris vel viverra. Suspendisse ornare id erat nec varius. Morbi eu lectus vel ipsum facilisis semper. In at magna id odio fringilla porta et vel felis. Interdum et malesuada fames.",
  },
  {
    projectName: "Recipe Recommendation App",
  },
  {
    projectName: "IoT app",
    projectDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis justo enim, a eleifend libero venenatis vitae. Vestibulum lobortis sodales mauris vel viverra. Suspendisse ornare id erat nec varius. Morbi eu lectus vel ipsum facilisis semper. In at magna id odio fringilla porta et vel felis. Interdum et malesuada fames.",
  },
  {
    projectName: "Task Manager",
    projectDescription:
      "Manage your daily task and projects in a gamified system. Users can earn achievements and progress their level by finishing their tasks on time.",
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
            <ProjectCard
              projectName={item.projectName}
              projectDescription={item.projectDescription}
              key={item.projectName}
            />
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "500px",
        width: "750px",
        padding: "10px",
        marginBottom: "3px",
        borderRadius: "10px",
        border: "2px solid black",
        backgroundColor: "white",
      }}
    >
      <span style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
        {props.projectName}
      </span>
      <span style={{}}>{props.projectDescription}</span>
    </div>
  );
};
