import pdf from "../../../assets/pdf/immanuel-resume.pdf";

export default function ResumeLink() {
  return (
    <a
      className="text-black visited:text-black"
      href={pdf}
      target="_black"
      rel="noreferrer"
    >
      Click here to see my Resume!
    </a>
  );
}
