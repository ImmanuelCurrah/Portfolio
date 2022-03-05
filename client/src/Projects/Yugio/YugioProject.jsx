import { useState } from "react";
import Card from "../../UI/Card/Card";
import Modal from "../../Modal/Modal";
import classes from "../ProjectsAll.module.css";

export default function YugioProject(props) {
  const [show, setShow] = useState(false);

  return (
    <div className={classes.projects}>
      <h1
        className={classes.name}
        onClick={() => {
          setShow(true);
        }}
      >
        Yug.io
      </h1>
      <Modal
        onClose={() => {
          setShow(false);
        }}
        show={show}
        title="Yug.io"
      >
        <Card>
          <div>
            This is a card game using the card from the popular show/game Yugio.
            Pick a character and battle against the computer. Three are 10
            levels, every win gets you closer to that goal. This was my first
            project at GA.
          </div>
          <div
            className={classes.external_link}
            onClick={() => {
              window.location.href = "https://immanuelcurrah.github.io/Yug.io/";
            }}
          >
            Deployed Website
          </div>
          <div
            className={classes.external_link}
            onClick={() => {
              window.location.href = "https://github.com/ImmanuelCurrah/Yug.io";
            }}
          >
            Github Source Code
          </div>
        </Card>
      </Modal>
    </div>
  );
}
