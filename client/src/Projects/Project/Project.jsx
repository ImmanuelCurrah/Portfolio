import { useState } from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import Modal from "../../Modal/Modal";
import Card from "../../UI/Card/Card";

export default function Project(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-row items-center h-16 text-center cursor-pointer">
      <div className="flex flex-col items-start justify-center group">
        <span className="opacity-0 group-hover:opacity-100 group-hover:animate-bounce">
          <BsFillArrowDownCircleFill />
        </span>
        <h2
          className="text-3xl font-medium transition duration-150 border-b-2 border-transparent hover:border-black"
          onClick={() => {
            setShow(true);
          }}
        >
          {props.projectName}
        </h2>
      </div>

      <Modal
        onClose={() => {
          setShow(false);
        }}
        show={show}
        title={props.title}
      >
        <Card>
          <div className="flex flex-col items-center">
            <div>{props.description}</div>
            <div
              className="border-b-2 border-black"
              onClick={() => {
                window.location.href = props.deployedLink;
              }}
            >
              Deployed Website
            </div>
            <div
              className="border-b-2 border-black"
              onClick={() => {
                window.location.href = props.github;
              }}
            >
              Github Source Code
            </div>
          </div>
        </Card>
      </Modal>
    </div>
  );
}
