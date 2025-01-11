import { createContext, useContext, useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";

////********************************************* This is the Menus(compound component)
//// I have used the create context to create it which is used to get the values from the parent to childs
//// I have attach the childrens as the method to the parent
//// Positions that I am calculating below is for the position of modal window that will show edit/duplicate/delete options

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
      className="translate-x-[0.8rem] transform border-none bg-none p-[0.4rem] transition-all duration-200"
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
      className="fixed z-[1000] list-none rounded-lg bg-white py-2 shadow-md"
      style={{
        right: `${position.x}px`,
        top: `${position.y}px`,
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
        className="flex w-full items-center gap-4 border-none bg-none px-4 py-[0.8rem] text-left text-base transition-all duration-200"
        onClick={handleClick}
      >
        {icon}
        <span>{children}</span>
      </button>
    </li>
  );
}

function Menu({ children }) {
  return <div className="flex items-center justify-end">{children}</div>;
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
