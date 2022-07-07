import linkedin from "../../../assets/pictures/linkedin.png";
import github from "../../../assets/pictures/github.png";

export default function SocialMediaLinks() {
  return (
    <div className="flex flex-row items-center justify-start">
      <img
        className="h-8 m-1 cursor-pointer"
        src={linkedin}
        alt="linkedin icon"
        onClick={() => {
          window.open("https://www.linkedin.com/in/immanuelcurrah/", "_blank");
        }}
      />
      <img
        className="h-8 m-1 cursor-pointer"
        src={github}
        alt="github icon"
        onClick={() => {
          window.open("https://github.com/ImmanuelCurrah", "_blank");
        }}
      />
    </div>
  );
}
