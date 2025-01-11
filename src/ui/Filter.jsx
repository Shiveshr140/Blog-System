import { useSearchParams } from "react-router-dom";
import { useDarkMode } from "../contexts/DarkmodeContext";

function Filter({ filterField, options }) {
  const { isDarkMode } = useDarkMode();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options[0].value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div
      className={`flex gap-2 overflow-x-auto rounded-md p-2 ${
        isDarkMode
          ? "border border-gray-700 bg-gray-800 shadow-lg"
          : "border border-gray-300 bg-white shadow-sm"
      }`}
    >
      {options.map((option) => {
        const isActive = option.value === currentFilter;

        return (
          <button
            key={option.value}
            onClick={() => handleClick(option.value)}
            disabled={isActive}
            className={`rounded-md px-3 py-2 text-sm font-semibold transition-all ${
              isActive
                ? "cursor-not-allowed bg-indigo-600 text-white"
                : isDarkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;

// import { useSearchParams } from "react-router-dom";
// import { useDarkMode } from "../contexts/DarkmodeContext";

// function Filter({ filterField, options }) {
//   const { isDarkMode } = useDarkMode();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const currentFilter = searchParams.get(filterField) || options.at(0).value;

//   function handleClick(value) {
//     searchParams.set(filterField, value);
//     // if (searchParams.get("page")) searchParams.set("page", 1);
//     setSearchParams(searchParams);
//   }

//   return (
//     <div
//       style={{
//         border: "1px solid #f3f4f6",
//         backgroundColor: "#fff",
//         boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
//         borderRadius: "5px",
//         padding: "0.4rem",
//         display: "flex",
//         gap: "0.4rem",
//       }}
//     >
//       {options.map((option) => {
//         const isActive = option.value === currentFilter;

//         return (
//           <button
//             key={option.value}
//             onClick={() => handleClick(option.value)}
//             disabled={isActive}
//             style={{
//               backgroundColor: isActive ? "#4f46e5" : "#fff",
//               color: isActive ? "#eef2ff" : "inherit",
//               border: "none",
//               borderRadius: "5px",
//               fontWeight: 500,
//               fontSize: "1rem",
//               padding: "0.44rem 0.8rem",
//               transition: "all 0.3s",
//               cursor: isActive ? "not-allowed" : "pointer",
//             }}
//             onMouseEnter={(e) => {
//               if (!isActive) {
//                 e.target.style.backgroundColor = "#4f46e5";
//                 e.target.style.color = "#eef2ff";
//               }
//             }}
//             onMouseLeave={(e) => {
//               if (!isActive) {
//                 e.target.style.backgroundColor = "#fff";
//                 e.target.style.color = "inherit";
//               }
//             }}
//           >
//             {option.label}
//           </button>
//         );
//       })}
//     </div>
//   );
// }

// export default Filter;
