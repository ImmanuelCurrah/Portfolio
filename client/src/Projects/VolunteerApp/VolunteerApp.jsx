import { useState } from "react";
import Card from "../../assets/UI/Card/Card";
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
          <div>deployed link</div>
          <div>github</div>
        </Card>
      </Modal>
    </div>
  );
}
