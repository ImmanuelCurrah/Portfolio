import Project from "../../../Projects/Project/Project";
import { projects } from "../../../Projects/Project/Projects";
import FooterLinks from "../../footerLinks/FooterLinks";

export default function ProjectComponent(props) {
  return (
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
              title={project.name}
            />
          );
        })}
      </div>
      <FooterLinks currentHref={props.id} />
    </>
  );
}
