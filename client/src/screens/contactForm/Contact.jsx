import { send } from "emailjs-com";
import { useState } from "react";
import classes from "./Contact.module.css";
import tree from "../../assets/pictures/tree.png";

export default function Contact() {
  const defaultInput = {
    from_name: "",
    to_name: "Immanuel Currah",
    message: "",
    reply_to: "",
  };

  const [toSend, setToSend] = useState(defaultInput);
  const [buttonText, setButtonText] = useState("Send");

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_he6g3vg",
      "template_qn3p83o",
      toSend,
      "user_xgsffGVyXexQ3ivs5i03i"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    setToSend(defaultInput);
    setButtonText("Sent!");
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className={classes.query_container}>
      <form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.form_inputs}>
          <label>Name:</label>

          <input
            className={classes.input}
            type="text"
            name="from_name"
            placeholder="Your name"
            value={toSend.from_name}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className={classes.form_inputs}>
          <label>Email:</label>
          <input
            className={classes.input}
            type="text"
            name="reply_to"
            placeholder="Your email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className={classes.form_inputs}>
          <label>Message:</label>
          <textarea
            className={classes.message}
            type="text"
            name="message"
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
          />
        </div>
        <br />
        <button className={classes.button} type="submit">
          {buttonText}
        </button>
      </form>
      <img
        className={classes.tree}
        src={tree}
        alt="calligraphy of birds and tree"
      />
    </div>
  );
}
