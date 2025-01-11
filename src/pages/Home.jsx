import { useDarkMode } from "../contexts/DarkmodeContext";
import { useUser } from "../contexts/UserContext";
import CreateUser from "../features/user/CreateUser";
import Button from "../ui/Button";
import Header from "../ui/Header";

function Home() {
  const { username, submitted } = useUser();
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`grid h-screen w-full grid-rows-[auto_1fr_auto] ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}
    >
      <Header />

      {/* Main content container */}
      <div
        className={`w-full px-4 py-10 text-center sm:my-16 ${isDarkMode ? "bg-gray-900 text-gray-100" : "text-gray-900"} min-h-0 flex-1`}
      >
        <h1
          className={`mb-8 text-xl font-semibold md:text-3xl ${isDarkMode ? "text-white" : "text-black"}`}
        >
          Welcome to the blog.
          <br />
          <span>Share your thoughts, ideas, and stories with the world.</span>
        </h1>

        {!submitted ? (
          <CreateUser />
        ) : (
          <Button path="/blogs" type="primary">
            Continue blogging, {username}
          </Button>
        )}
      </div>

      {/* Footer */}
      <footer
        className={`py-4 text-center ${
          isDarkMode ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-600"
        } text-sm`}
      >
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;

// function Home() {
//   const { username, submitted } = useUser();
//   const { isDarkMode } = useDarkMode();

//   return (
//     <div
//       className={`h-vh grid w-full grid-rows-3 ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}
//     >
//       <Header />

//       <div
//         className={`w-full px-4 py-10 text-center sm:my-16 ${isDarkMode ? "bg-gray-900 text-gray-100" : "text-gray-900"}`}
//       >
//         <h1
//           className={`mb-8 text-xl font-semibold md:text-3xl ${isDarkMode ? "text-white" : "text-black"}`}
//         >
//           Welcome to the blog.
//           <br />
//           <span>Share your thoughts, ideas, and stories with the world.</span>
//         </h1>

//         {!submitted ? (
//           <CreateUser />
//         ) : (
//           <Button path="/blogs" type="primary">
//             Continue blogging, {username}
//           </Button>
//         )}
//       </div>
//       {/* Footer */}
//       <footer
//         className={`py-4 text-center ${
//           isDarkMode ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-600"
//         } text-sm`}
//       >
//         © {new Date().getFullYear()} MyApp. All rights reserved.
//       </footer>
//     </div>
//   );
// }

// export default Home;

// function Home() {
//   const { username, submitted } = useUser();
//   const { isDarkMode } = useDarkMode();

//   return (
//     <div
//       className={`w-full overflow-hidden ${isDarkMode ? "bg-black text-gray-100" : "text-gray-900"}`}
//     >
//       <Header />

//       <div
//         className={`w-full px-4 py-10 text-center sm:my-16 ${isDarkMode ? "bg-black text-gray-100" : "text-gray-900"}`}
//       >
//         <h1
//           className={`mb-8 text-xl font-semibold md:text-3xl ${isDarkMode ? "text-white" : "text-black"}`}
//         >
//           Welcome to the blog.
//           <br />
//           <span>Share your thoughts, ideas, and stories with the world.</span>
//         </h1>

//         {!submitted ? (
//           <CreateUser />
//         ) : (
//           <Button path="/blogs" type="primary">
//             Continue blogging, {username}
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;
