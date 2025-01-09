import { cloneElement, createContext, useContext, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

// step 1 create context
const ModalContext = createContext();

// step 2 create parent component
function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

// step 3 create child components
function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  // Inline styles
  const overlayStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Backdrop color
    backdropFilter: "blur(4px)",
    zIndex: 1000,
    transition: "all 0.5s",
  };

  const modalStyles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#f4f4f4", // Light grey background
    borderRadius: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "3.2rem 4rem",
    transition: "all 0.5s",
  };

  const closeButtonStyles = {
    background: "none",
    border: "none",
    padding: "0.4rem",
    borderRadius: "4px",
    transform: "translateX(0.8rem)",
    transition: "all 0.2s",
    position: "absolute",
    top: "1.2rem",
    right: "1.9rem",
  };

  const closeButtonHoverStyles = {
    backgroundColor: "#e0e0e0",
  };

  const closeIconStyles = {
    width: "2.4rem",
    height: "2.4rem",
    color: "#777",
  };

  return createPortal(
    <div style={overlayStyles}>
      <div style={modalStyles} ref={ref}>
        <button
          style={closeButtonStyles}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor =
              closeButtonHoverStyles.backgroundColor)
          }
          onMouseLeave={(e) => (e.target.style.backgroundColor = "none")}
          onClick={close}
        >
          <HiXMark style={closeIconStyles} />
        </button>
        <div>
          {cloneElement(children, {
            onCloseModal: close,
          })}
        </div>
      </div>
    </div>,
    document.body
  );
}

// step 4 attached child properties to parent
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
