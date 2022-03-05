import { useState } from "react";
import Modal from "../../Modal/Modal";
import Card from "../../UI/Card/Card";
import classes from "../ProjectsAll.module.css";

export default function FastingHelper() {
  const [show, setShow] = useState(false);
  return (
    <div className={classes.projects}>
      <h1
        className={classes.name}
        onClick={() => {
          setShow(true);
        }}
      >
        FastingHelper
      </h1>
      <Modal
        onClose={() => {
          setShow(false);
        }}
        show={show}
        title="FastingHelper"
      >
        <Card>
          <div>
            This app was inspired by the Insight Timer app. My goal was to
            create a similar app but for fasting. It includes a timer and a
            social media aspect to connect and talk with people. This is to
            support the journey of fasting that has many health benefits. Both
            mentally and physically. It was written with React as the front-end
            and Ruby on Rails as the back-end. This was my final project with
            GA.
          </div>
          <div
            className={classes.external_link}
            onClick={() => {
              window.location.href = "https://festive-ride-24923c.netlify.app";
            }}
          >
            Deployed Website
          </div>
          <div
            className={classes.external_link}
            onClick={() => {
              window.location.href =
                "https://github.com/ImmanuelCurrah/FastingHelper";
            }}
          >
            Github Source Code
          </div>
        </Card>
      </Modal>
    </div>
  );
}
