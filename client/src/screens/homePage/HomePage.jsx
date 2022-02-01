import classes from "./HomePage.module.css";
import circle from "../../assets/pictures/zen-circle.png";

export default function HomePage() {
  return (
    <div className={classes.background}>
      <img className={classes.circle} src={circle} alt="zen circle" />
    </div>
  );
}
