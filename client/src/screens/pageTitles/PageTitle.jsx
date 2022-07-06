// import { useState } from "react";
import classes from "./PageTitle.module.css";
import lotus from "../../assets/pictures/lotus.png";
import Contact from "../contactForm/Contact";
import About from "../about/About";
import Project from "../../Projects/Project/Project";
import { projects } from "../../Projects/Project/Projects";

export default function PageTitle(props) {
  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-between border-2 border-t-black"
      id={props.id}
    >
      <div className={classes.name_titles}>
        <img className="w-24" src={lotus} alt="a lotus calligraphy" />
        <div className="text-3xl font-bold">{props.title}</div>
      </div>
      {props.id === "projects" && (
        <>
          <div className={classes.project_names}>
            {projects.map((project, index) => {
              return (
                <Project
                  key={index}
                  projectName={project.name}
                  description={project.description}
                  deployedLink={project.deployedLink}
                  github={project.github}
                />
              );
            })}
          </div>
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
      <div className="mb-6 text-xl">
        <a className="mx-4" href="#top">
          Home
        </a>
        <a className="mx-4" href="#projects">
          Projects
        </a>
        <a className="mx-4" href="#about">
          About
        </a>
        <a className="mx-4" href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
}
