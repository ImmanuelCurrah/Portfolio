import "./Modal.css";

export default function Modal(props) {
  return (
    <div
      className={`modal ${props.show ? "show" : ""}`}
      onClick={() => props.onClose()}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{props.title}</h4>
        </div>
        <div className="modal-body">{props.children}</div>
        <div className="modal-footer"></div>
        <button
          className="button"
          onClick={() => {
            props.onClose();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
