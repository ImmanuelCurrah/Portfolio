import Card from "../../assets/UI/Card/Card";
import classes from "../ProjectsAll.module.css";

export default function MazeRunning(props) {
  const { toggle, setToggle, toggleMaze } = props;
  return (
    <div className={classes.projects}>
      <h1
        className={classes.name}
        onClick={() => {
          setToggle((prevToggle) => !prevToggle);
          toggleMaze();
        }}
      >
        Maze Running
      </h1>
      {toggle && (
        <Card>
          <div>
            This is a maze game. You can compete with other player's times in
            four unique mazes. Each one having its own design and character. The
            high scores will be recorded but only the best are shown. Good luck!
            This was my second project at GA.
          </div>
          <div>deployed link</div>
          <div>github</div>
        </Card>
      )}
    </div>
  );
}
