import { useState } from "react";

export const useFooter = () => {
  const [currentHref, setCurrentHref] = useState("");

  const changeHref = (val) => {
    setCurrentHref(val);
  };

  return { currentHref, changeHref };
};
