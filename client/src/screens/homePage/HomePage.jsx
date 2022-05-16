import PageTitle from "../pageTitles/PageTitle";
import HomeScreen from "../homeScreen/HomeScreen";

export default function HomePage() {
  return (
    <div>
      <HomeScreen />
      <PageTitle title={"Projects"} href={"projects"} id={"projects"} />
      <PageTitle title={"About"} href={"about"} id={"about"} />
      <PageTitle title={"Contact"} href={"contact"} id={"contact"} />
    </div>
  );
}
