import classes from "./About.module.css";
import me from "../../assets/pictures/me.jpeg";

export default function About() {
  return (
    <div className={classes.about_container}>
      <img className={classes.img} src={me} alt="me" />
      <div className={classes.mobile_container}>
        <div className={classes.text}>
          I am a Ruby and React lover. Coming from a a background in
          construction, I have a passion for problem solving and paying close
          attention to detail. Also after having been a zen buddhist monk for a
          number of years, I really learned what teamwork and community means. I
          think that meeting everyone where they are at exactly is the most
          important kind of work we can do.
        </div>
        <p>Technologies Leveraged</p>
        <div className={classes.carousel}>
          <div className={classes.languages}>
            <img
              className={classes.language_icons}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              alt="react icon"
            />
            <img
              className={classes.language_icons}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              alt="javascript icon"
            />
            <img
              className={classes.language_icons}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
              alt="express icon"
            />
            <img
              className={classes.language_icons}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
              alt="mongoDB icon"
            />
            <img
              className={classes.language_icons}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
              alt="postgreSQL icon"
            />
            <img
              className={classes.language_icons}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
              alt="github icon"
            />
            <img
              className={classes.language_icons}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg"
              alt="ruby icon"
            />
            <img
              className={classes.language_icons}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="css icon"
            />
            <img
              className={classes.language_icons}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="html icon"
            />
            <img
              className={classes.language_icons}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg"
              alt="bootstrap icon"
            />
            <img
              className={classes.language_icons}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg"
              alt="rails icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
