import About from "../../../screens/about/About";
import FooterLinks from "../../footerLinks/FooterLinks";

export default function AboutComponent(props) {
  return (
    <>
      <div>
        <About />
      </div>
      <FooterLinks currentHref={props.id} />
    </>
  );
}
