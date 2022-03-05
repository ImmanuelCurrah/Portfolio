import classes from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={classes.card}>
      <div className={classes.children}>{props.children}</div>
    </div>
  );
}
