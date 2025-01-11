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

// function Header() {
//   const { searchInput, setSearchInput, handleSearchInput } = useBlog();
//   const { setUsername, submitted, setSubmitted } = useUser();
//   const { isDarkMode } = useDarkMode();
//   console.log("dark", isDarkMode);

//   function handleSubmit(e) {
//     e.preventDefault();
//     setSearchInput(searchInput);
//   }

//   function handleLogout() {
//     setSubmitted(false);
//     setUsername("");
//   }

//   return (
//     <header
//       className={`flex flex-col items-center justify-between gap-4 border-b border-gray-300 sm:flex-row ${
//         isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
//       } p-4`}
//     >
//       <div className="flex items-center gap-2">
//         <img src="microblog.svg" alt="Microblog Logo" className="w-10" />
//         <h1 className="text-xl font-bold">Microblog</h1>
//       </div>

//       <form className="w-full sm:w-7/12 md:w-1/3" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={searchInput}
//           onChange={handleSearchInput}
//           placeholder="Search for blog"
//           aria-placeholder="Search for blog"
//           className={`w-full rounded border p-2 focus:outline-none focus:ring-2 ${
//             isDarkMode
//               ? "border-gray-600 bg-gray-700 text-white focus:ring-blue-400"
//               : "border-gray-300 bg-white text-black focus:ring-blue-400"
//           }`}
//         />
//       </form>

//       {submitted && (
//         <>
//           <div>
//             <UserName />
//           </div>
//           <div>
//             <Button type="small" path="/blog">
//               Create Your Post
//             </Button>
//           </div>

//           <div onClick={handleLogout}>
//             <HiOutlineLogout
//               className={isDarkMode ? "text-white" : "text-black"}
//             />
//           </div>
//         </>
//       )}
//       <DarkModeToggle />
//     </header>
//   );
// }

// export default Header;

//*************************************************  W/o tailwind

// function Header() {
//   const { searchInput, setSearchInput, handleInput } = useBlog();

//   function handleSubmit(e) {
//     e.preventDefault();
//     setSearchInput(searchInput);
//   }

//   return (
//     <header
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         gap: "10px",
//         padding: "1rem 3rem",
//         borderBottom: "1px solid #ddd",
//         backgroundColor: "#f9f9f9",
//       }}
//     >
//       {/* Logo and Title */}
//       <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//         <img
//           src="microblog.svg"
//           alt="Microblog Logo"
//           style={{ width: "40px" }}
//         />
//         <h1 style={{ fontSize: "1.5rem", margin: 0 }}>Microblog</h1>
//       </div>

//       {/* Search Input */}
//       <form
//         style={{ width: "70%", marginLeft: "10px", marginRight: "10px" }}
//         onSubmit={handleSubmit}
//       >
//         <input
//           type="text"
//           value={searchInput}
//           onChange={handleInput}
//           placeholder="Search for blog"
//           aria-placeholder="Search for blog"
//           style={{
//             width: "100%",
//             padding: "0.5rem",
//             borderRadius: "4px",
//             border: "1px solid #ccc",
//             outline: "none",
//           }}
//         />
//       </form>

//       {/* Create Post Button */}
//       <div>
//         <Button path="/blog">Create Your Post</Button>
//       </div>
//     </header>
//   );
// }

// export default Header;
