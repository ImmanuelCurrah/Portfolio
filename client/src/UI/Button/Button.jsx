import React from "react";

export default function Button(props) {
  return (
    <button
      className="text-white bg-black w-16 h-8 rounded-lg cursor-pointer"
      type="submit"
    >
      {props.buttonText}
    </button>
  );
}
