// import { useState } from "react";
import classes from "./PageTitle.module.css";
import lotus from "../../assets/pictures/lotus.png";

import YugioProject from "../../Projects/Yugio/YugioProject";
import MazeRunning from "../../Projects/Maze/MazeRunning";
import VolunteerApp from "../../Projects/VolunteerApp/VolunteerApp";
import FastingHelper from "../../Projects/FastingHelper/FastingHelper";
import HudsonMakeup from "../../Projects/HudsonMakeup/HudsonMakeup";
import Contact from "../contactForm/Contact";
import About from "../about/About";

export default function PageTitle(props) {
  return (
    <div className={classes.background_pages} id={props.id}>
      <div className={classes.name_titles}>
        <img className={classes.lotus} src={lotus} alt="a lotus calligraphy" />
        <div className={classes.headers}>{props.title}</div>
      </div>
      {props.id === "projects" && (
        <>
          <div className={classes.project_names}>
            <YugioProject />
            <MazeRunning />
            <VolunteerApp />
            <FastingHelper />
            <HudsonMakeup />
          </div>
          <div className={classes.mountains}></div>
        </>
      )}
      {props.id === "contact" && (
        <div>
          <Contact />
        </div>
      )}
      {props.id === "about" && (
        <div>
          <About />
        </div>
      )}
      <div className={classes.footer}>
        <a className={classes.back} href="#top">
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
