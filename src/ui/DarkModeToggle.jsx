import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../contexts/DarkmodeContext";

// const ButtonIcon = styled.button`
//   background: none;
//   border: none;
//   padding: 0.6rem;
//   border-radius: var(--border-radius-sm);
//   transition: all 0.2s;

//   &:hover {
//     background-color: var(--color-grey-100);
//   }

//   & svg {
//     width: 2.2rem;
//     height: 2.2rem;
//     color: var(--color-brand-600);
//   }
// `;

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
