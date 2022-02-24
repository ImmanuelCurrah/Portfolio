import classes from "./LinksContainer.module.css";

export default function LinksContainer(props) {
  return <ul className={classes.links_container}>{props.children}</ul>;
}
