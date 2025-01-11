import { createContext, useContext, useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";

const MenusContext = createContext();

function Menus({ children, isDarkMode = false }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = (id) => setOpenId(id);

  return (
    <MenusContext.Provider
      value={{ openId, position, close, open, setPosition, isDarkMode }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, close, open, setPosition, isDarkMode } =
    useContext(MenusContext);

  const handleClick = (e) => {
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.right - 8,
      y: rect.bottom + 8,
    });
    openId === "" || openId !== id ? open(id) : close();
  };

  return (
    <button
      style={{
        background: "none",
        border: "none",
        padding: "0.4rem",
        transform: "translateX(0.8rem)",
        transition: "all 0.2s",
      }}
      onClick={handleClick}
    >
      <HiEllipsisVertical
        className={`h-7 w-9 ${isDarkMode ? "text-white" : "text-gray-70"}`}
      />
    </button>
  );
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close);

  if (openId !== id || !position) return null;

  return createPortal(
    <ul
      ref={ref}
      style={{
        position: "fixed",
        right: `${position.x}px`,
        top: `${position.y}px`,
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
        borderRadius: "8px",
        padding: "0.5rem 0",
        zIndex: 1000,
        listStyle: "none",
      }}
    >
      {children}
    </ul>,
    document.body,
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);

  const handleClick = () => {
    onClick?.();
    close();
  };

  return (
    <li>
      <button
        style={{
          width: "100%",
          textAlign: "left",
          background: "none",
          border: "none",
          padding: ".8rem 1.4rem",
          fontSize: "1rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          transition: "all 0.2s",
        }}
        onClick={handleClick}
      >
        {icon}
        <span>{children}</span>
      </button>
    </li>
  );
}

function Menu({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      {children}
    </div>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
