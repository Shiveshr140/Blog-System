import React from "react";
import { useNavigate } from "react-router-dom";

function Button({ children, path }) {
  const navigate = useNavigate();
  return <button onClick={() => navigate(path)}>{children}</button>;
}

export default Button;
