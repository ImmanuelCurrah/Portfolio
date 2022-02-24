import Card from "../../assets/UI/Card/Card";
import classes from "../ProjectsAll.module.css";

export default function YugioProject(props) {
  const { toggle, setToggle, toggleYugioh } = props;
  return (
    <div className={classes.projects}>
      <h1
        className={classes.name}
        onClick={() => {
          setToggle((prevToggle) => !prevToggle);
          toggleYugioh();
        }}
      >
        Yug.io
      </h1>
      {toggle && (
        <Card>
          <div>
            This is a card game using the card from the popular show/game Yugio.
            Pick a character and battle against the computer. Three are 10
            levels, every win gets you closer to that goal. This was my first
            project at GA.
          </div>
          <div>deployed link</div>
          <div>github</div>
        </Card>
      )}
    </div>
  );
}
