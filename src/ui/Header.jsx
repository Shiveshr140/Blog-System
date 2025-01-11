import React from "react";
import Button from "./Button";
import { useBlog } from "../contexts/BlogContext";
import { useUser } from "../contexts/UserContext";
import { HiOutlineLogout } from "react-icons/hi";
import { useDarkMode } from "../contexts/DarkmodeContext";
import DarkModeToggle from "./DarkModeToggle";
import { useNavigate } from "react-router-dom";

function Header() {
  const { searchInput, setSearchInput, handleSearchInput } = useBlog();
  const { username, setUsername, submitted, setSubmitted } = useUser();
  const { isDarkMode } = useDarkMode();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setSearchInput(searchInput);
  }

  function handleLogout() {
    setSubmitted(false);
    setUsername("");
  }

  return (
    <header
      className={`flex flex-col items-center justify-between gap-4 border-b border-gray-300 sm:flex-row sm:items-center ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      } p-4`}
    >
      {/* Logo and Heading Section */}
      <div
        onClick={() => navigate("/blogs")}
        className="flex cursor-pointer items-center gap-3 sm:flex-shrink-0"
      >
        <img src="microblog.svg" alt="Microblog Logo" className="w-10" />
        <h1
          className={`text-2xl font-semibold ${
            isDarkMode ? "text-white" : "text-slate-800"
          }`}
        >
          Microblog
        </h1>
      </div>

      {/* Search Bar Section */}
      <form className="w-full sm:w-7/12 md:w-1/3" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchInput}
          placeholder="Search for blog"
          aria-placeholder="Search for blog"
          className={`w-full rounded border p-2 focus:outline-none focus:ring-2 ${
            isDarkMode
              ? "border-gray-600 bg-gray-700 text-white focus:ring-blue-400"
              : "border-gray-300 bg-white text-black focus:ring-blue-400"
          }`}
        />
      </form>

      {/* User Section */}
      {submitted ? (
        <div className="hidden items-center gap-4 sm:flex">
          <p className="text-lg font-medium">{`Hi, ${username}`}</p>
          <Button type="small" path="/blog">
            Create Your Post
          </Button>
          <div onClick={handleLogout} className="cursor-pointer" title="Logout">
            <HiOutlineLogout
              className={`h-6 w-6 ${isDarkMode ? "text-white" : "text-black"}`}
            />
          </div>
          <DarkModeToggle />
        </div>
      ) : (
        <DarkModeToggle />
      )}

      {/* Compact Section for Smaller Screens */}
      {submitted && (
        <div className="flex items-center gap-4 sm:hidden">
          <Button type="small" path="/blog">
            Create Post
          </Button>
          <div onClick={handleLogout} className="cursor-pointer" title="Logout">
            <HiOutlineLogout
              className={`h-6 w-6 ${isDarkMode ? "text-white" : "text-black"}`}
            />
          </div>
          <DarkModeToggle />
        </div>
      )}
    </header>
  );
}

export default Header;
