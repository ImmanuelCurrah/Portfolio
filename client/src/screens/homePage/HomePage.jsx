import PageTitle from "../pageTitles/PageTitle";
import HomeScreen from "../homeScreen/HomeScreen";

export default function HomePage() {
  return (
    <div>
      <HomeScreen />
      <PageTitle title={"Projects"} href={"top"} id={"projects"} />
      <PageTitle title={"About"} href={"top"} id={"about"} />
      <PageTitle title={"Contact"} href={"top"} id={"contact"} />
    </div>
  );
}
