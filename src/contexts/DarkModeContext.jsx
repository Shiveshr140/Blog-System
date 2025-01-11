import { createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

function DarkModeContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "DarkMode");

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("UserContext is used outside the UserContext");
  return context;
}

export { DarkModeContextProvider, useDarkMode };
