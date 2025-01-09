import { useEffect, useRef } from "react";

//// capture the event in capturing phase listenCapaturing = true
export function useOutsideClick(handler, listenCapaturing = true) {
  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        console.log("clicked outside");
        handler();
      }
    }
    document.addEventListener("click", handleClick, listenCapaturing);
    return () => {
      document.removeEventListener("click", handleClick, listenCapaturing);
    };
  }, [handler, listenCapaturing]);
  return ref;
}
