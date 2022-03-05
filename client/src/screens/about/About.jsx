import classes from "./About.module.css";
import me from "../../assets/pictures/me.jpeg";

export default function About() {
  return (
    <div className={classes.about_container}>
      <img className={classes.img} src={me} alt="me" />
      <div>
        <div className={classes.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit neque
          explicabo nisi fugit soluta et suscipit accusamus, sunt ratione quam
          natus, in, necessitatibus consequatur voluptas cumque qui! Cupiditate,
          exercitationem est!
        </div>
      </div>
    </div>
  );
}
