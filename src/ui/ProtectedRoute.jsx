import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

function ProtectedRoute({ children }) {
  const { submitted } = useUser();
  console.log("pr", submitted);
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!submitted) navigate("/");
    },
    [submitted, navigate],
  );

  return submitted ? children : null;
}

export default ProtectedRoute;
