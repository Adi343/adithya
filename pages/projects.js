const projectsList = [
  {
    projectName: "Live Chat",
    projectDescription:
      "Chat application to show live chat like apps such as YouTube,Twitch etc",
    tech: ["React", "Express", "Web Sockets"],
  },
  {
    projectName: "Portfolio",
    projectDescription: "Personal website about me to showcase my projects.",
    tech: ["React", "NextJS"],
  },

  {
    projectName: "IoT app",
    projectDescription:
      "Use Face Recognition technology to detect intruder. An Android App provides user the ability to control his IoT devices and view detailed analytics of the devices.",
    tech: [
      "Java",
      "Android",
      "Machine Learning",
      "AWS",
      "Python",
      "Raspberry Pi",
    ],
  },
  {
    projectName: "Task Manager",
    projectDescription:
      "Manage your daily task and projects in a gamified system. Users can earn achievements and progress their level by finishing their tasks on time.",
    tech: ["Java", "Android", "SQLite"],
  },
  {
    projectName: "Recipe Recommendation App",
    tech: ["Java", "Android"],
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
              tech={[...item.tech]}
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
    <div className="projectCard">
      <span style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
        {props.projectName}
      </span>
      <span style={{ textAlign: "center" }}>{props.projectDescription}</span>

      <div>
        <span>Built With </span>

        {props.tech.map((item) => (
          <span style={{ margin: "3px", fontWeight: "bold" }}>{item}</span>
        ))}
      </div>
      <span>Check out code at</span>
    </div>
  );
};
