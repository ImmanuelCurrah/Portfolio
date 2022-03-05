import { useState } from "react";
import Card from "../../UI/Card/Card";
import Modal from "../../Modal/Modal";
import classes from "../ProjectsAll.module.css";

export default function VolunteerApp() {
  const [show, setShow] = useState(false);

  return (
    <div className={classes.projects}>
      <h1
        className={classes.name}
        onClick={() => {
          setShow(true);
        }}
      >
        Volunteer App
      </h1>
      <Modal
        onClose={() => {
          setShow(false);
        }}
        show={show}
        title="VolunteerApp"
      >
        <Card>
          <div>
            An application that allows both business and volunteers to sign up
            and create accounts. The business may post events they need help
            with, while the volunteers are allowed to comment to sign up. This
            was my third project and was a group project. I mainly focused on
            the backend functionality and the user Auth using express and
            mongoDB.
          </div>
          <div
            className={classes.external_link}
            onClick={() => {
              window.location.href = "https://hungry-borg-6b9f04.netlify.app";
            }}
          >
            Deployed Website
          </div>
          <div
            className={classes.external_link}
            onClick={() => {
              window.location.href =
                "https://github.com/ImmanuelCurrah/VolunteerApp";
            }}
          >
            Front-end Source Code
          </div>
          <div>source code for the backend in Express:</div>
          <div
            className={classes.external_link}
            onClick={() => {
              window.location.href =
                "https://github.com/ImmanuelCurrah/VolunteerAppBackend";
            }}
          >
            Back-end Source Code
          </div>
        </Card>
      </Modal>
    </div>
  );
}
