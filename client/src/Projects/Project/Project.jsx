import { useState } from "react";
import ProjectName from "../../components/projectComponents/projectNames/ProjectName";
import Modal from "../../Modal/Modal";
import Card from "../../UI/Card/Card";

export default function Project(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-row items-center h-16 text-center cursor-pointer">
      <ProjectName projectName={props.projectName} setShow={setShow} />
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
