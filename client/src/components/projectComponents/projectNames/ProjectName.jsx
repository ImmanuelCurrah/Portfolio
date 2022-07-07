import { BsFillArrowDownCircleFill } from "react-icons/bs";

export default function ProjectName(props) {
  return (
    <div className="flex flex-col items-start justify-center group">
      <span className="opacity-0 group-hover:opacity-100 group-hover:animate-bounce">
        <BsFillArrowDownCircleFill />
      </span>
      <h2
        className="text-3xl font-medium transition duration-150 border-b-2 border-transparent hover:border-black"
        onClick={() => {
          props.setShow(true);
        }}
      >
        {props.projectName}
      </h2>
    </div>
  );
}
