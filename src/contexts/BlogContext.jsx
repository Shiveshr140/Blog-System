import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { initialBlogs } from "../data/initialBlogs";

const BlogContext = createContext();

function BlogContextProvider({ children }) {
  const [blogs, setBlogs] = useLocalStorageState(initialBlogs, "blogdata");
  const [searchInput, setSearchInput] = useState("");

  function handleSearchInput(e) {
    setSearchInput(e.target.value);
  }

  return (
    <BlogContext.Provider
      value={{
        blogs,
        searchInput,
        setBlogs,
        setSearchInput,
        handleSearchInput,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

function useBlog() {
  const context = useContext(BlogContext);
  if (context === undefined)
    throw new Error("BlogContext is used outside the BlogContextProvider");
  return context;
}

export { BlogContextProvider, useBlog };
