import { useState } from "react";
import Modal from "../../Modal/Modal";
import Card from "../../UI/Card/Card";
import classes from "../ProjectsAll.module.css";

export default function HudsonMakeup() {
  const [show, setShow] = useState(false);
  return (
    <div className={classes.projects}>
      <h1
        className={classes.name}
        onClick={() => {
          setShow(true);
        }}
      >
        Hudson Valley Makeup
      </h1>
      <Modal
        onClose={() => {
          setShow(false);
        }}
        show={show}
        title="Hudson Valley Makeup"
      >
        <Card>
          <div>This is a website I designed for a local makeup artist</div>
          <div
            className={classes.external_link}
            onClick={() => {
              window.location.href = "https://www.hudsonvalleymakeup.com";
            }}
          >
            Deployed Website
          </div>
          <div
            className={classes.external_link}
            onClick={() => {
              window.location.href =
                "https://github.com/ImmanuelCurrah/Hudson-Makeup";
            }}
          >
            Github Source Code
          </div>
        </Card>
      </Modal>
    </div>
  );
}
