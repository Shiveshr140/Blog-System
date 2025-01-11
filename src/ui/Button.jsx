import React from "react";
import { useNavigate } from "react-router-dom";

function Button({ children, path, type }) {
  const navigate = useNavigate();

  const base = `inline-block text-sm rounded-full font-semibold text-white tracking-wide uppercase 
                bg-blue-600 hover:bg-blue-500 transition-colors duration-300
                focus:outline-none focus:bg-blue-500 focus:ring  focus:ring-offset-2
                focus:ring-blue-300 disabled:cursor-not-allowed`;

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " text-xs px-5 py-2 md:px-5 md:py-2.5",
    round: base + " text-sm px-2.5 py-1 md:px-3.5 md:py-2",
    secondary: `inline-block text-sm rounded-full font-semibold text-blue-600 tracking-wide uppercase 
                 border-2 border-blue-300 hover:text-white hover:bg-blue-400 transition-colors duration-300
                focus:text-white focus:outline-none focus:bg-blue-400 focus:ring  focus:ring-offset-2
                focus:ring-blue-300 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5`,
  };

  return (
    <button onClick={() => navigate(path)} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
