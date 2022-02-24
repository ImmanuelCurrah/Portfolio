import classes from "./Link.module.css";

export default function Link(props) {
  return (
    <li>
      <a href={`#${props.link}`} className={classes.links}>
        {props.title}
      </a>
    </li>
  );
}
