import Link from "next/link";
import Image from "next/image";
import photograph from "../public/adithya.png";

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
          backgroundColor: "white",
        }}
      >
        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Adithya Pantangi
        </span>
        {/* Profile Card */}
        <div
          // style={{
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "end",
          //   width: "600px",
          //   height: "500px",
          //   marginBottom: "100px",
          //   borderRadius: "10px",
          //   backgroundColor: "green",
          //   // border: "3px solid black",
          // }}
          className="profileCard"
        >
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
              // backgroundColor: "whitesmoke",
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
                <a
                  // style={{
                  //   // textDecoration: "underline",
                  //   fontSize: "1.25rem",
                  //   color: "#0000EE",
                  // }}
                  className="linkStyle"
                >
                  Projects
                </a>
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
