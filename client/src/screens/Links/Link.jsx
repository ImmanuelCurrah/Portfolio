import { useFooter } from "../../hooks/useFooter";

export default function Link(props) {
  const { changeHref } = useFooter();

  return (
    <li className="my-2">
      <a
        href={`#${props.link}`}
        className="flex flex-col text-2xl transition duration-150 border-b-2 border-transparent hover:border-black visited:text-black"
        onClick={() => {
          changeHref(props.title);
        }}
      >
        {props.title}
      </a>
    </li>
  );
}
