import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import TextEditor from "../../ui/TextEditor";
import { useNavigate } from "react-router-dom";
import { useBlog } from "../../contexts/BlogContext";
import { useDarkMode } from "../../contexts/DarkmodeContext";

// function CreatePost({ blog = {}, isModal = false }) {
//   const navigate = useNavigate();
//   const [title, setTitle] = useState("");
//   const [tags, setTags] = useState("");
//   const [author, setAuthor] = useState("");
//   const [content, setContent] = useState("");
//   const { setBlogs } = useBlog();
//   const { isDarkMode: originalDarkMode } = useDarkMode();
//   const isDarkMode = isModal ? false : originalDarkMode;

//   useEffect(() => {
//     if (blog && blog.content) {
//       setTitle(blog.title);
//       setTags(blog.tags);
//       setAuthor(blog.author);
//       setContent(blog.content);
//     }
//   }, [blog]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let blogData;

//     if (blog.id) {
//       // Updating existing blog
//       toast.success("Post is successfully updated!!");
//       const updatedBlogData = { ...blog, title, tags, author, content };

//       setBlogs((prev) =>
//         prev.map((prevBlog) =>
//           prevBlog.id === blog.id ? updatedBlogData : prevBlog,
//         ),
//       );
//     } else {
//       // Creating a new blog
//       toast.success("Post is successfully published!!");
//       blogData = {
//         title,
//         tags,
//         author,
//         content,
//         reposted: false,
//         createdAt: new Date().toISOString().split("T")[0],
//         id: uuidv4(),
//       };
//       setBlogs((prev) => [blogData, ...prev]);
//     }

//     // Optionally clear form fields after submission
//     setTitle("");
//     setAuthor("");
//     setTags("");
//     setContent("");

//     console.log(blogData);
//     navigate("/blogs");
//   };

//   return (
//     <div
//       className={`mx-auto max-w-3xl p-6 ${isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"} rounded-lg shadow-md`}
//     >
//       <h1 className="mb-6 text-center text-2xl font-bold">
//         {!blog.id ? "Write Your Blog" : "Update Your Blog"}
//       </h1>
//       <form onSubmit={handleSubmit} className="mx-auto space-y-4 px-2">
//         {/* Title */}
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder={blog.title ? "" : "Title"}
//           className={`w-full rounded border p-3 text-lg font-semibold ${isDarkMode ? "border-gray-600 bg-gray-700 placeholder-gray-400" : "border-gray-300 bg-gray-50 placeholder-gray-500"}`}
//         />

//         {/* Tags */}
//         <input
//           type="text"
//           value={tags}
//           onChange={(e) => setTags(e.target.value)}
//           placeholder={
//             blog?.tags ? "" : "Tags (e.g., React, JavaScript, Web Development)"
//           }
//           className={`w-full rounded border p-3 ${isDarkMode ? "border-gray-600 bg-gray-700 placeholder-gray-400" : "border-gray-300 bg-gray-50 placeholder-gray-500"}`}
//         />

//         {/* Author */}
//         <input
//           type="text"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//           placeholder={blog.author ? "" : "Author Name"}
//           className={`w-full rounded border p-3 ${isDarkMode ? "border-gray-600 bg-gray-700 placeholder-gray-400" : "border-gray-300 bg-gray-50 placeholder-gray-500"}`}
//         />

//         {/* Content */}
//         <TextEditor
//           content={content || ""}
//           onSetContent={setContent}
//           blog={blog}
//         />

//         {/* Submit Button */}
//         <button
//           onClick={() => {
//             navigate("/blogs");
//           }}
//           type="submit"
//           className={`rounded px-6 py-3 font-medium text-white transition ${isDarkMode ? "bg-green-600 hover:bg-green-500" : "bg-blue-600 hover:bg-blue-500"}`}
//         >
//           Publish Blog
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CreatePost;

// function CreatePost({ blog = {} }) {
//   const navigate = useNavigate();
//   const [title, setTitle] = useState("");
//   const [tags, setTags] = useState("");
//   const [author, setAuthor] = useState("");
//   const [content, setContent] = useState(""); // Default as empty string
//   const { setBlogs } = useBlog();

//   useEffect(() => {
//     if (blog && blog.content) {
//       setTitle(blog.title);
//       setTags(blog.tags);
//       setAuthor(blog.author);
//       setContent(blog.content);
//     }
//   }, [blog]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let blogData;

//     if (blog.id) {
//       // Updating existing blog
//       toast.success("Post is successfully updated!!");
//       const updatedBlogData = { ...blog, title, tags, author, content };

//       setBlogs((prev) =>
//         prev.map((prevBlog) =>
//           prevBlog.id === blog.id ? updatedBlogData : prevBlog
//         )
//       );
//     } else {
//       // Creating a new blog
//       toast.success("Post is successfully published!!");
//       blogData = {
//         title,
//         tags,
//         author,
//         content,
//         reposted: false,
//         createdAt: new Date().toISOString().split("T")[0],
//         id: uuidv4(),
//       };
//       setBlogs((prev) => [blogData, ...prev]);
//     }

//     // Optionally clear form fields after submission
//     setTitle("");
//     setAuthor("");
//     setTags("");
//     setContent("");

//     console.log(blogData);
//     navigate("/");
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
//       <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
//         {!blog.id ? "Write Your Blog" : "Update Your Blog"}
//       </h1>
//       <form onSubmit={handleSubmit}>
//         {/* Title */}
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder={blog.title ? "" : "Title"}
//           style={{
//             width: "100%",
//             padding: "10px",
//             marginBottom: "15px",
//             fontSize: "20px",
//             fontWeight: "bold",
//             border: "1px solid #ddd",
//             borderRadius: "5px",
//           }}
//         />

//         {/* Tags */}
//         <input
//           type="text"
//           value={tags}
//           onChange={(e) => setTags(e.target.value)}
//           placeholder={
//             blog?.tags ? "" : "Tags (e.g., React, JavaScript, Web Development)"
//           }
//           style={{
//             width: "100%",
//             padding: "10px",
//             marginBottom: "15px",
//             border: "1px solid #ddd",
//             borderRadius: "5px",
//           }}
//         />

//         {/* Author */}
//         <input
//           type="text"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//           placeholder={blog.author ? "" : "Author Name"}
//           style={{
//             width: "100%",
//             padding: "10px",
//             marginBottom: "15px",
//             border: "1px solid #ddd",
//             borderRadius: "5px",
//           }}
//         />

//         {/* Content */}
//         <TextEditor
//           content={content || ""}
//           onSetContent={setContent}
//           blog={blog}
//         />

//         {/* Submit Button */}
//         <button
//           type="submit"
//           style={{
//             backgroundColor: "#0073b1",
//             color: "#fff",
//             padding: "10px 20px",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//             fontSize: "16px",
//             marginLeft: "auto",
//           }}
//         >
//           Publish Blog
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CreatePost;

function CreatePost({ blog = {} }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const { setBlogs } = useBlog();
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (blog && blog.content) {
      setTitle(blog.title);
      setTags(blog.tags);
      setAuthor(blog.author);
      setContent(blog.content); // If blog content exists, set it
    }
  }, [blog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let blogData;

    if (blog.id) {
      // Updating existing blog
      toast.success("Post is successfully updated!!");
      const updatedBlogData = { ...blog, title, tags, author, content };

      setBlogs((prev) =>
        prev.map((prevBlog) =>
          prevBlog.id === blog.id ? updatedBlogData : prevBlog,
        ),
      );
    } else {
      // Creating a new blog
      toast.success("Post is successfully published!!");
      blogData = {
        title,
        tags,
        author,
        content,
        reposted: false,
        createdAt: new Date().toISOString().split("T")[0],
        id: uuidv4(),
      };
      setBlogs((prev) => [blogData, ...prev]);
    }

    // Optionally clear form fields after submission
    setTitle("");
    setAuthor("");
    setTags("");
    setContent("");

    navigate("/blogs");
  };

  return (
    <div className="mx-auto max-w-3xl p-5">
      <h1 className="mb-5 text-center text-2xl font-bold">
        {!blog.id ? "Write Your Blog" : "Update Your Blog"}
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        {/* Title */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={blog.title ? "" : "Title"}
          className="w-full rounded border border-gray-300 p-2.5 text-lg font-bold text-black"
        />

        {/* Tags */}
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder={
            blog?.tags ? "" : "Tags (e.g., React, JavaScript, Web Development)"
          }
          className="w-full rounded border border-gray-300 p-2.5 text-black"
        />

        {/* Author */}
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder={blog.author ? "" : "Author Name"}
          className="w-full rounded border border-gray-300 p-2.5 text-black"
        />

        {/* Content */}
        <TextEditor
          content={content || ""}
          onSetContent={setContent}
          blog={blog}
          isDarkMode={isDarkMode}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="ml-auto cursor-pointer rounded border-none bg-[#0073b1] px-5 py-2 text-base text-white"
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
