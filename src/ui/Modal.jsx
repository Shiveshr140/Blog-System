import { cloneElement, createContext, useContext, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

////********************************************* This is the Menus(compound component)
//// I have used the create context to create it which is used to get the values from the parent to childs
//// I have attach the childerns as the method to the parrent

// Step 1: Create context
const ModalContext = createContext();

// Step 2: Create parent component
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

// Step 3: Create child components
function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm transition-all">
      <div
        ref={ref}
        className="fixed left-1/2 top-1/2 max-h-[80vh] -translate-x-1/2 -translate-y-1/2 transform overflow-y-auto rounded-lg bg-gray-100 p-8 shadow-lg transition-all"
      >
        <button
          className="absolute right-4 top-4 rounded bg-transparent p-2 transition hover:bg-gray-200"
          onClick={close}
        >
          <HiXMark className="h-6 w-6 text-gray-500" />
        </button>
        <div className="pb-4">
          {cloneElement(children, {
            onCloseModal: close,
          })}
        </div>
      </div>
    </div>,
    document.body,
  );
}

// Step 4: Attach child properties to parent
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
