import classes from "./About.module.css";
import me from "../../assets/pictures/me.jpeg";

export default function About() {
  return (
    <div className={classes.about_container}>
      <img className={classes.img} src={me} alt="me" />
      <div>
        <div className={classes.text}>
          I am a Ruby and React lover. Coming from a a background in
          construction, I have a passion for problem solving and paying close
          attention to detail. Also after having been a zen buddhist monk for a
          number of years, I really learned what teamwork and community means. I
          think that working on a team and meeting everyone where they are at
          exactly is the most important kind of work we can do.
        </div>
        <div className={classes.languages}>
          <i className="devicon-react-original-wordmark"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-express-original-wordmark colored"></i>
          <i className="devicon-mongodb-plain-wordmark"></i>
          <i className="devicon-postgresql-plain colored"></i>
          <i className="devicon-github-original-wordmark colored"></i>
          <i className="devicon-ruby-plain-wordmark colored"></i>
          <i className="devicon-css3-plain colored"></i>
          <i className="devicon-html5-plain-wordmark colored"></i>
          <i className="devicon-bootstrap-plain-wordmark colored"></i>
          <i className="devicon-rails-plain-wordmark colored"></i>
        </div>
      </div>
    </div>
  );
}
