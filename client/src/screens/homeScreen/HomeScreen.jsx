import classes from "./HomeScreen.module.css";
import Link from "../Links/Link";
import LinksContainer from "../../components/linksContainer/LinksContainer";
import circle from "../../assets/pictures/zen-circle.png";
import linkedin from "../../assets/pictures/linkedin.png";
import github from "../../assets/pictures/github.png";
import pdf from "../../assets/pdf/immanuel-resume.pdf";

export default function HomeScreen() {
  return (
    <div className={classes.background} id="top">
      <img className={classes.circle} src={circle} alt="zen circle" />
      <div className={classes.container}>
        <div className={classes.name}>Immanuel Currah</div>
        <LinksContainer>
          <Link link={"projects"} title={"Projects"} />
          <Link link={"about"} title={"About"} />
          <Link link={"contact"} title={"Contact"} />
        </LinksContainer>
        <a
          className={classes.resume}
          href={pdf}
          target="_black"
          rel="noreferrer"
        >
          Click here to see my Resume!
        </a>
        <div className={classes.icons_container}>
          <img
            className={classes.icons}
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
            className={classes.icons}
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
