import { createContext, useContext, useState } from "react";

////***************** This for the user and submitted state is used to check whether the user has submitted its name or not as just by typing username will be set from undefined to defined

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <UserContext.Provider
      value={{
        username,
        submitted,
        setUsername,
        setSubmitted,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("UserContext is used outside the UserContext");
  return context;
}

export { UserContextProvider, useUser };
