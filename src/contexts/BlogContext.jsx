import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const BlogContext = createContext();

function BlogContextProvider({ children }) {
  const [blogs, setBlogs] = useLocalStorageState([], "blogdata");

  return (
    <BlogContext.Provider
      value={{
        blogs,
        setBlogs,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

function useBlog() {
  const context = useContext(BlogContext);
  if (context === "undefined")
    throw new Error("BlogContext is used outside the BlogContextProvider");
  return context;
}

export { BlogContextProvider, useBlog };
