export default function Card(props) {
  return (
    <div className="rounded-md w-52">
      <div className="m-4">{props.children}</div>
    </div>
  );
}
