import Image from "next/image";
import githubIcon from "../public/GitHub-Mark-64px.png";

const projectsList = [
  {
    name: "Live Chat",
    description:
      "Chat application to show live chat like apps such as YouTube,Twitch etc",
    tech: ["React", "Express", "Web Sockets"],
    link: "",
  },
  {
    name: "Portfolio",
    description: "Personal website about me to showcase my projects.",
    tech: ["React", "NextJS"],
    link: "https://github.com/Adi343/adithya",
  },

  {
    name: "IoT app",
    description:
      "Use Face Recognition technology to detect intruder. An Android App provides user the ability to control his IoT devices and view detailed analytics of the devices.",
    tech: [
      "Java",
      "Android",
      "Machine Learning",
      "AWS",
      "Python",
      "Raspberry Pi",
    ],
    link: "",
  },
  {
    name: "Task Manager",
    description:
      "Manage your daily task and projects in a gamified system. Users can earn achievements and progress their level by finishing their tasks on time.",
    tech: ["Java", "Android", "SQLite"],
    link: "https://github.com/Adi343/TM_v3",
  },
  {
    name: "Recipe Recommendation App",
    description: "Search for your favourite recipes and save them in your app.",
    tech: ["Java", "Android"],
    link: "https://github.com/Adi343/FoodApp",
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
              name={item.name}
              description={item.description}
              tech={[...item.tech]}
              link={item.link}
              key={item.name}
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
        {props.name}
      </span>
      <span style={{ textAlign: "center" }}>{props.description}</span>

      <div>
        <span style={{ fontWeight: "bold" }}>Built With </span>

        {props.tech.map((item) => (
          <span
            style={{
              margin: "3px",
              fontWeight: "semi-bold",
              textDecoration: "underline",
            }}
            key={item}
          >
            {item}
          </span>
        ))}
      </div>

      {props.link !== "" && typeof props.link === "" ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "150px",
            height: "50px",
          }}
        >
          <span>Check out code at</span>
          <a
            href={props.link}
            target="_blank"
            style={{
              paddingTop: "5px",
              marginLeft: "5px",
            }}
          >
            <Image
              width={20}
              height={20}
              src={githubIcon}
              style={{
                display: "inline-block",
                verticalAlign: "bottom",
              }}
            />
          </a>
        </div>
      ) : null}
    </div>
  );
};
