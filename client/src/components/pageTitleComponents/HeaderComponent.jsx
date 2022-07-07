import lotus from "../../assets/pictures/lotus.png";

export default function HeaderComponent(props) {
  return (
    <div className="flex flex-row items-center">
      <img className="w-24" src={lotus} alt="a lotus calligraphy" />
      <div className="text-3xl font-bold">{props.title}</div>
    </div>
  );
}
