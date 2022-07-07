import { send } from "emailjs-com";
import { useState } from "react";
import tree from "../../assets/pictures/tree.png";
import Button from "../../UI/Button/Button";

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
    <div className="tablet:flex flex-row items-center justify-center">
      {buttonText === "Send" && (
        <form className="text-center" onSubmit={onSubmit}>
          <div className="flex flex-col items-start">
            <label>Name:</label>
            <input
              className="w-60 tablet:w-72"
              type="text"
              name="from_name"
              placeholder="Your name"
              value={toSend.from_name}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="flex flex-col items-start">
            <label>Email:</label>
            <input
              className="w-60 tablet:w-72"
              type="text"
              name="reply_to"
              placeholder="Your email"
              value={toSend.reply_to}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="flex flex-col items-start">
            <label>Message:</label>
            <textarea
              className="w-60 h-16 tablet:w-72 h-48"
              type="text"
              name="message"
              placeholder="Your message"
              value={toSend.message}
              onChange={handleChange}
            />
          </div>
          <br />
          <Button buttonText={buttonText} />
        </form>
      )}
      {buttonText === "Sent!" && (
        <h2 className="font-bold text-3xl">Message sent. Thank you!</h2>
      )}
      <img
        className="w-60 tablet:m-4 w-72"
        src={tree}
        alt="calligraphy of birds and tree"
      />
    </div>
  );
}
