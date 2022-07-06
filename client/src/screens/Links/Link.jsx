import classes from "./Link.module.css";

export default function Link(props) {
  return (
    <li className="my-2">
      <a href={`#${props.link}`} className="text-2xl">
        {props.title}
      </a>
    </li>
  );
}
