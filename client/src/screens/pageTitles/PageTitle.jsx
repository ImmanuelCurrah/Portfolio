// import { useState } from "react";
import classes from "./PageTitle.module.css";
import lotus from "../../assets/pictures/lotus.png";
import mountain from "../../assets/pictures/pngfind.com-mountain-outline-png-1489981.png";
import mountain_two from "../../assets/pictures/mountain.png";
import tree from "../../assets/pictures/tree.png";
import YugioProject from "../../Projects/Yugio/YugioProject";
// import MazeRunning from "../../Projects/Maze/MazeRunning";
// import VolunteerApp from "../../Projects/VolunteerApp/VolunteerApp";
import Contact from "../contactForm/Contact";
import About from "../about/About";

export default function PageTitle(props) {
  // const [yugiohToggle, setYugioToggle] = useState(false);
  // const [mazeToggle, setMazeToggle] = useState(false);
  // const [appToggle, setAppToggle] = useState(false);

  // const toggleYugioh = () => {
  //   setAppToggle(false);
  //   setMazeToggle(false);
  // };

  // const toggleMaze = () => {
  //   setYugioToggle(false);
  //   setAppToggle(false);
  // };

  // const toggleApp = () => {
  //   setYugioToggle(false);
  //   setMazeToggle(false);
  // };

  return (
    <div className={classes.background_pages} id={props.id}>
      <div className={classes.name_titles}>
        <img className={classes.lotus} src={lotus} alt="a lotus calligraphy" />
        <div className={classes.headers}>{props.title}</div>
      </div>
      <div>
        {props.id === "projects" && (
          <div className={classes.project_names}>
            <div>
              <img
                className={classes.mountain}
                src={mountain}
                alt="calligraphy mountain"
              />
            </div>
            <div>
              <YugioProject
              // toggle={yugiohToggle}
              // setToggle={setYugioToggle}
              // toggleYugioh={toggleYugioh}
              />
              {/* <MazeRunning
                toggle={mazeToggle}
                setToggle={setMazeToggle}
                toggleMaze={toggleMaze}
              />
              <VolunteerApp
                toggle={appToggle}
                setToggle={setAppToggle}
                toggleApp={toggleApp}
              /> */}
            </div>
            <img
              className={classes.mountain}
              src={mountain_two}
              alt="calligraphy mountain"
            />
          </div>
        )}
        {props.id === "contact" && (
          <div>
            <Contact />
            <img
              className={classes.tree}
              src={tree}
              alt="calligraphy of birds and tree"
            />
          </div>
        )}
        {props.id === "about" && (
          <div>
            <About />
          </div>
        )}
      </div>
      <div className={classes.footer}>
        <a className={classes.back} href={`#${props.href}`}>
          Home
        </a>
        <a className={classes.back} href="#projects">
          Projects
        </a>
        <a className={classes.back} href="#about">
          About
        </a>
        <a className={classes.back} href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
}
