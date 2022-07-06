import Link from "../Links/Link";
import LinksContainer from "../../components/linksContainer/LinksContainer";
import circle from "../../assets/pictures/zen-circle.png";
import linkedin from "../../assets/pictures/linkedin.png";
import github from "../../assets/pictures/github.png";
import pdf from "../../assets/pdf/immanuel-resume.pdf";

export default function HomeScreen() {
  return (
    <div className="flex flex-col items-center h-screen" id="top">
      <img className="h-48 m-16" src={circle} alt="zen circle" />
      <div>
        <div className="text-3xl">Immanuel Currah</div>
        <LinksContainer>
          <Link link={"projects"} title={"Projects"} />
          <Link link={"about"} title={"About"} />
          <Link link={"contact"} title={"Contact"} />
        </LinksContainer>
        <a
          className="text-black visited:text-black"
          href={pdf}
          target="_black"
          rel="noreferrer"
        >
          Click here to see my Resume!
        </a>
        <div className="flex flex-row items-center justify-start">
          <img
            className="h-8 m-1 cursor-pointer"
            src={linkedin}
            alt="linkedin icon"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/immanuelcurrah/",
                "_blank"
              );
            }}
          />
          <img
            className="h-8 m-1 cursor-pointer"
            src={github}
            alt="github icon"
            onClick={() => {
              window.open("https://github.com/ImmanuelCurrah", "_blank");
            }}
          />
        </div>
      </div>
    </div>
  );
}
