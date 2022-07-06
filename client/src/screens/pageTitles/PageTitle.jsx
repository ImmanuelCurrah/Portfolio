import lotus from "../../assets/pictures/lotus.png";
import Contact from "../contactForm/Contact";
import About from "../about/About";
import Project from "../../Projects/Project/Project";
import { projects } from "../../Projects/Project/Projects";

const footerLinks = ["Home", "Projects", "About", "Contact"];

export default function PageTitle(props) {
  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-between border-2 border-t-black"
      id={props.id}
    >
      <div className="flex flex-row items-center">
        <img className="w-24" src={lotus} alt="a lotus calligraphy" />
        <div className="text-3xl font-bold">{props.title}</div>
      </div>
      {props.id === "projects" && (
        <>
          <div className="">
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
        {footerLinks.map((link, index) => {
          return (
            <a key={index} className="mx-4" href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          );
        })}
      </div>
    </div>
  );
}
