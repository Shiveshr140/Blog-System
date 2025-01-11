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
