export default function Modal(props) {
  return (
    <div
      className={`${
        props.show
          ? "h-screen flex flex-col items-center justify-center ease-in-out duration-300 fixed top-0 left-0 right-0 opacity-1 bg-[#00000080]"
          : "h-screen flex flex-col items-center justify-center ease-in-out duration-300 fixed top-0 left-0 right-0 opacity-0 bg-[#00000080] pointer-events-none"
      }`}
      onClick={() => props.onClose()}
    >
      <div
        className="flex flex-col items-center rounded-lg bg-[#fffff9] shadow-black shadow-lg w-72 tablet:w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-xl p-4">
          <h4 className="modal-title">{props.title}</h4>
        </div>
        <div className="p-4 my-4 border-y-2 border-[#eee]">
          {props.children}
        </div>
        <button
          className="text-white bg-black font-lg w-24 h-12 rounded-lg m-2 cursor-pointer"
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
