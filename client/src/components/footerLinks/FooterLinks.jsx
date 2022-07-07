import { useState, useEffect } from "react";

const defaultFooterLinks = ["Home", "Projects", "About", "Contact"];

export default function FooterLinks(props) {
  const [footerLinks, setFooterLinks] = useState(defaultFooterLinks);

  useEffect(() => {
    const filterHref = () => {
      setFooterLinks(
        footerLinks.filter(
          (val) => val.toLocaleLowerCase() !== props.currentHref
        )
      );
    };
    filterHref();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="mb-6 text-xl">
      {footerLinks.map((link, index) => {
        return (
          <a key={index} className="mx-4" href={`#${link.toLowerCase()}`}>
            {link}
          </a>
        );
      })}
    </div>
  );
}
