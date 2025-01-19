import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import Button from "../../ui/Button";
import { useDarkMode } from "../../contexts/DarkmodeContext";

function CreateUser() {
  const { username, setUsername, setSubmitted } = useUser();
  const { isDarkMode } = useDarkMode();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    setSubmitted(true);
    navigate("/blogs");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-lg p-4 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <p
        className={`mb-4 text-sm md:text-base ${isDarkMode ? "text-gray-400" : "text-stone-600"}`}
      >
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={`mb-8 w-60 rounded-full border sm:w-72 md:w-96 ${
          isDarkMode
            ? "border-gray-600 bg-gray-700 text-gray-100"
            : "border-stone-400 bg-white text-gray-900"
        } px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring focus:ring-blue-400 md:px-6 md:py-3`}
      />

      {username !== "" && (
        <div>
          <Button path="/blogs" type="primary">
            Start Blogging
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
