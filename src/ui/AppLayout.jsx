import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useDarkMode } from "../contexts/DarkmodeContext";

function AppLayout() {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`flex min-h-screen flex-col transition-all duration-300 ease-in-out ${
        isDarkMode ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Header />

      <main
        className={`mx-auto my-8 w-full max-w-full flex-1 px-4 pb-6 sm:max-w-3xl sm:px-6 ${
          isDarkMode
            ? "bg-gray-800 shadow-lg shadow-black/50"
            : "bg-white shadow-lg shadow-black/10"
        } rounded-xl`}
      >
        <Outlet />
      </main>

      <footer
        className={`py-4 text-center ${
          isDarkMode ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-600"
        } text-sm`}
      >
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
    </div>
  );
}

export default AppLayout;
