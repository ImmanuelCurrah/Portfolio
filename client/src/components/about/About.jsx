import me from "../../assets/pictures/me.jpeg";
import { icons } from "./Icons";

export default function About() {
  return (
    <div>
      <div className="m-4 tablet:flex flex-col items-center">
        <img
          className="h-48 rounded-lg float-left mr-4 tablet:h-72"
          src={me}
          alt="me"
        />
        <div className="text-justify mr-4 tablet:w-96 tablet:text-xl">
          I am a Ruby and React lover. Coming from a a background in
          construction, I have a passion for problem solving and paying close
          attention to detail. Also after having been a zen buddhist monk for a
          number of years, I really learned what teamwork and community means.
          Meeting everyone where they are at exactly is the most important kind
          of work we can do.
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold tablet:text-2xl">Technologies Leveraged</p>
        <div className="flex justify-center">
          <div className="flex flex-row h-24 w-52 border-2 border-black overflow-x-scroll tablet:w-72">
            {icons.map((icon, index) => {
              return (
                <img
                  className="w-12 m-1"
                  key={index}
                  src={icon.src}
                  alt={icon.alt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
