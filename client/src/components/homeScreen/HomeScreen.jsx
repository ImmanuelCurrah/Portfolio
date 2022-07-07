import Link from "../Links/Link";
import LinksContainer from "../linksContainer/LinksContainer";
import ResumeLink from "../homeScreenComponents/ResumeComponent/ResumeLink";
import SocialMediaLinks from "../homeScreenComponents/SocialMediaComponent/SocialMediaLinks";
import ZenCircle from "../homeScreenComponents/ZenCircleComponent/ZenCircle";

export default function HomeScreen() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen tablet:flex-row"
      id="home"
    >
      <ZenCircle />
      <div>
        <div className="text-3xl font-bold">Immanuel Currah</div>
        <LinksContainer>
          <Link link={"projects"} title={"Projects"} />
          <Link link={"about"} title={"About"} />
          <Link link={"contact"} title={"Contact"} />
        </LinksContainer>
        <ResumeLink />
        <SocialMediaLinks />
      </div>
    </div>
  );
}
