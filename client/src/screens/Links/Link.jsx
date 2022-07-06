export default function Link(props) {
  return (
    <li className="my-2">
      <a
        href={`#${props.link}`}
        className="flex flex-col text-2xl transition duration-150 border-b-2 border-transparent hover:border-black visited:text-black"
      >
        {props.title}
      </a>
    </li>
  );
}
