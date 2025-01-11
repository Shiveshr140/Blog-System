import { cloneElement, createContext, useContext, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

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

// // step 1 create context
// const ModalContext = createContext();

// // step 2 create parent component
// function Modal({ children }) {
//   const [openName, setOpenName] = useState("");
//   const close = () => setOpenName("");
//   const open = setOpenName;
//   return (
//     <ModalContext.Provider value={{ openName, close, open }}>
//       {children}
//     </ModalContext.Provider>
//   );
// }

// // step 3 create child components
// function Open({ children, opens: opensWindowName }) {
//   const { open } = useContext(ModalContext);
//   return cloneElement(children, { onClick: () => open(opensWindowName) });
// }

// function Window({ children, name }) {
//   const { openName, close } = useContext(ModalContext);

//   const ref = useOutsideClick(close);

//   if (name !== openName) return null;

//   // Inline styles
//   const overlayStyles = {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100vh",
//     backgroundColor: "rgba(0, 0, 0, 0.5)", // Backdrop color
//     backdropFilter: "blur(4px)",
//     zIndex: 1000,
//     transition: "all 0.5s",
//   };

//   const modalStyles = {
//     position: "fixed",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     backgroundColor: "#f4f4f4",
//     borderRadius: "16px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//     padding: "3.2rem 4rem",
//     transition: "all 0.5s",
//     maxHeight: "80%", // Restrict max height
//     overflowY: "auto", // Make content scrollable vertically
//     overflowX: "hidden", // Prevent horizontal scroll
//   };

//   const contentStyles = {
//     maxHeight: "calc(80vh - 3.2rem - 4rem)", // Adjust height based on modal padding
//     overflowY: "auto", // Ensure content inside modal is scrollable
//     paddingBottom: "1rem", // Add some space at the bottom for padding
//   };

//   const closeButtonStyles = {
//     background: "none",
//     border: "none",
//     padding: "0.4rem",
//     borderRadius: "4px",
//     transform: "translateX(0.8rem)",
//     transition: "all 0.2s",
//     position: "absolute",
//     top: "1.2rem",
//     right: "1.9rem",
//   };

//   const closeButtonHoverStyles = {
//     backgroundColor: "#e0e0e0",
//   };

//   const closeIconStyles = {
//     width: "1.8rem",
//     height: "1.8rem",
//     color: "#777",
//   };

//   return createPortal(
//     <div style={overlayStyles}>
//       <div style={modalStyles} ref={ref} className="modal">
//         <button
//           style={closeButtonStyles}
//           onMouseEnter={(e) =>
//             (e.target.style.backgroundColor =
//               closeButtonHoverStyles.backgroundColor)
//           }
//           onMouseLeave={(e) => (e.target.style.backgroundColor = "none")}
//           onClick={close}
//         >
//           <HiXMark style={closeIconStyles} />
//         </button>
//         <div style={{ contentStyles }}>
//           {cloneElement(children, {
//             onCloseModal: close,
//           })}
//         </div>
//       </div>
//     </div>,
//     document.body,
//   );
// }

// // step 4 attached child properties to parent
// Modal.Open = Open;
// Modal.Window = Window;

// export default Modal;
