import Contact from "../../contactForm/Contact";
import FooterLinks from "../../footerLinks/FooterLinks";

export default function ContactComponent(props) {
  return (
    <>
      <div>
        <Contact />
      </div>
      <FooterLinks currentHref={props.id} />
    </>
  );
}
