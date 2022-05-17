import PageTitle from "../pageTitles/PageTitle";
import HomeScreen from "../homeScreen/HomeScreen";

export default function HomePage() {
  return (
    <div>
      <HomeScreen />
      <PageTitle title={"Projects"} id={"projects"} />
      <PageTitle title={"About"} id={"about"} />
      <PageTitle title={"Contact"} id={"contact"} />
    </div>
  );
}
