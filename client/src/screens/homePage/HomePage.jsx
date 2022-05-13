import classes from "./HomePage.module.css";
import circle from "../../assets/pictures/zen-circle.png";
import PageTitle from "../pageTitles/PageTitle";
import Link from "../Links/Link";
import LinksContainer from "../../components/linksContainer/LinksContainer";

export default function HomePage() {
  return (
    <div>
      <div className={classes.background} id="top">
        <img className={classes.circle} src={circle} alt="zen circle" />
        <div className={classes.container}>
          <div className={classes.name}>Immanuel Currah</div>
          <LinksContainer>
            <Link link={"projects"} title={"Project"} />
            <Link link={"about"} title={"About"} />
            <Link link={"contact"} title={"Contact"} />
          </LinksContainer>
        </div>
      </div>
      <PageTitle title={"Projects"} href={"top"} id={"projects"} />
      <PageTitle title={"About"} href={"top"} id={"about"} />
      <PageTitle title={"Contact"} href={"top"} id={"contact"} />
    </div>
  );
}
