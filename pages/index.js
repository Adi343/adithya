import Link from "next/link";
import Image from "next/image";
import photograph from "../public/adithya.png";
import githubIcon from "../public/GitHub-Mark-64px.png";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          // backgroundColor: "white",
          backgroundColor: "#fbfbfb",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23cccbce' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            Adithya Pantangi
          </span>

          <a
            href={"https://github.com/Adi343"}
            target="_blank"
            rel="noreferrer"
            style={{
              paddingTop: "5px",
              marginLeft: "5px",
            }}
          >
            <Image
              width={32}
              height={32}
              src={githubIcon}
              style={{
                display: "inline-block",
                verticalAlign: "bottom",
              }}
            />
          </a>
        </div>
        {/* Profile Card */}
        <div className="profileCard">
          <div className="profilePhoto">
            {/* <span>Profile Card</span> */}
            {/* <img
              src="photo.src"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "10px",
                backgroundColor: "black",
              }}
            /> */}
            {photograph !== undefined ? (
              <Image
                src={photograph}
                width="100px"
                height="100px"
                borderRadius="10px"
                className="photo"
              />
            ) : null}
          </div>

          <div
            style={{
              flex: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              borderRadius: "10px",
            }}
          >
            <span style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              {`Hi There! `}{" "}
            </span>
            <span
              style={{ fontSize: "1.25rem" }}
            >{`I'm Adithya, a full stack developer from Hyderabad.`}</span>

            <span
              style={{ fontSize: "1.25rem" }}
            >{`Some of the technologies I've worked with are `}</span>

            <span
              style={{ fontSize: "1.25rem", fontWeight: "600" }}
            >{`ReactJS,NextJS,NodeJS,Express,MongoDb,Android`}</span>
            <span
              style={{ fontSize: "1.25rem", fontWeight: "600" }}
            >{`Javascript,Python,Go,Java`}</span>

            <span>
              {`Some of the `}{" "}
              <Link href="/projects">
                <a className="linkStyle">Projects</a>
              </Link>
              {` I've worked on!`}
            </span>
          </div>
        </div>
        <span>Made with NextJS</span>
      </div>
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
    </div>
  );
}
