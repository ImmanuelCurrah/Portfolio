import { send } from "emailjs-com";
import { useState } from "react";
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
    <div>
      <form className="text-center" onSubmit={onSubmit}>
        <div className="flex flex-col items-start">
          <label>Name:</label>
          <input
            className="w-60"
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
            className="w-60"
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
            className="w-60 h-16"
            type="text"
            name="message"
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
          />
        </div>
        <br />
        <button
          className="text-white bg-black w-16 h-8 rounded-lg cursor-pointer"
          type="submit"
        >
          {buttonText}
        </button>
      </form>
      <img className="w-60" src={tree} alt="calligraphy of birds and tree" />
    </div>
  );
}
