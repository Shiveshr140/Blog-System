import { useSearchParams } from "react-router-dom";
import { useDarkMode } from "../contexts/DarkmodeContext";

function SortBy({ options }) {
  const { isDarkMode } = useDarkMode();
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    const value = e.target.value;
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  }

  return (
    <div
      className={`flex items-center gap-2 rounded-md p-2 ${
        isDarkMode
          ? "border border-gray-700 bg-gray-800 shadow-lg"
          : "border border-gray-300 bg-white shadow-sm"
      }`}
    >
      <label
        htmlFor="sortBy"
        className={`text-sm font-semibold ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Sort By:
      </label>
      <select
        id="sortBy"
        value={sortBy}
        onChange={handleChange}
        className={`rounded-md px-2 py-1 text-sm font-medium transition-all ${
          isDarkMode
            ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        {/* Placeholder option */}
        <option value="" disabled>
          Select sort option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortBy;

// import { useSearchParams } from "react-router-dom";
// import Select from "./Select";
// import { useDarkMode } from "../contexts/DarkmodeContext";

// function SortBy({ options }) {
//   const { isDarkMode } = useDarkMode();
//   const [searchParams, setSearchParams] = useSearchParams();
//   // get the currently selected value
//   const sortBy = searchParams.get("sortBy") || "";
//   function handleChange(e) {
//     searchParams.set("sortBy", e.target.value);
//     setSearchParams(searchParams);
//   }
//   return (
//     <Select
//       options={options}
//       value={sortBy}
//       type="white"
//       onChange={handleChange}
//     />
//   );
// }

// export default SortBy;
