import { useState, useEffect } from "react";

///// This custom hook is to store and get the value from local storage
export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    console.log("Stored value in localStorage:", storedValue);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    console.log("Saving value to localStorage:", value);
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
