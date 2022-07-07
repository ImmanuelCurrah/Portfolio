import ProjectComponent from "../../components/screenComponents/projectsComponent/ProjectComponent";
import ContactComponent from "../../components/screenComponents/contactComponent/ContactComponent";
import AboutComponent from "../../components/screenComponents/aboutComponent/AboutComponent";
import HeaderComponent from "../../components/pageTitleComponents/HeaderComponent";

export default function PageTitle(props) {
  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-between border-2 border-t-black"
      id={props.id}
    >
      <HeaderComponent title={props.title} />
      {props.id === "projects" && <ProjectComponent id={props.id} />}
      {props.id === "contact" && <ContactComponent id={props.id} />}
      {props.id === "about" && <AboutComponent id={props.id} />}
    </div>
  );
}
