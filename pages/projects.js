import Image from "next/image";
import Link from "next/link";
import githubIcon from "../public/GitHub-Mark-64px.png";
import eComImage from "../public/eCommerceApp.png";
import portfolio from "../public/portfolio.png";
import realTimeChat from "../public/realTimeChat.png";
import iotApp from "../public/collegeProject.png";
import taskManager from "../public/knockList.png";
import foodApp from "../public/foodApp.png";

const projectsList = [
  {
    name: "eCommerce App",
    description: "",
    tech: ["NextJS", "Prisma", "MySQL"],
    link: "https://github.com/Adi343/ecommerce-app-nextjs",
    projectLink: "https://ecommerce-app-nextjs-cyan.vercel.app/",
  },
  {
    name: "Live Chat",
    description:
      "Chat application to show live chat like apps such as YouTube,Twitch etc",
    tech: ["React", "Express", "Web Sockets"],
    link: "",
    projectLink: "",
  },
  {
    name: "Portfolio",
    description: "Personal website about me to showcase my projects.",
    tech: ["React", "NextJS"],
    link: "https://github.com/Adi343/adithya",
    projectLink: "https://adithya-kappa.vercel.app/",
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
    projectLink: "",
  },
  {
    name: "Task Manager",
    description:
      "Manage your daily task and projects in a gamified system. Users can earn achievements and progress their level by finishing their tasks on time.",
    tech: ["Java", "Android", "SQLite"],
    link: "https://github.com/Adi343/TM_v3",
    projectLink: "",
  },
  {
    name: "Recipe Recommendation App",
    description: "Search for your favourite recipes and save them in your app.",
    tech: ["Java", "Android"],
    link: "https://github.com/Adi343/FoodApp",
    projectLink: "",
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
        <Link href="/">Adithya Pantangi</Link>
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
              image={item.image}
              projectLink={item.projectLink}
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

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "1%",
          overflow: "hidden",
          width: "700px",
          height: "425px",
          border: "5px solid black",
          backgroundColor: "black",
        }}
      >
        {props.name === "eCommerce App" ? (
          <Image src={eComImage} width={700} height={425} />
        ) : null}
        {props.name === "Live Chat" ? (
          <Image src={realTimeChat} width={700} height={425} />
        ) : null}
        {props.name === "Portfolio" ? (
          <Image src={portfolio} width={700} height={425} />
        ) : null}
        {props.name === "IoT app" ? (
          <Image src={iotApp} width={180} height={350} />
        ) : null}
        {props.name === "Task Manager" ? (
          <Image src={taskManager} width={180} height={350} />
        ) : null}

        {props.name === "Recipe Recommendation App" ? (
          <Image src={foodApp} width={180} height={350} />
        ) : null}
      </div>

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

      {props.link !== "" ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "150px",
            // height: "50px",
          }}
        >
          <span>Check out code at</span>
          <a
            href={props.link}
            target="_blank"
            rel="noopener"
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

      {props.projectLink !== "" ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "175px",
            // height: "50px",
          }}
        >
          <span>Check project live at </span>
          <a
            href={props.projectLink}
            target="_blank"
            rel="noopener"
            style={{
              marginLeft: "5px",
              textDecoration: "underline",
              color: "blue",
            }}
          >
            Here
          </a>
        </div>
      ) : null}
    </div>
  );
};
