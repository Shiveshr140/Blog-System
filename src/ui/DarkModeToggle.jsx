import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../contexts/DarkmodeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun
          className={`h-5 w-5 ${isDarkMode ? "text-white" : "text-black"}`}
        />
      ) : (
        <HiOutlineMoon
          className={`h-5 w-5 ${isDarkMode ? "text-white" : "text-black"}`}
        />
      )}
    </div>
  );
}

export default DarkModeToggle;
