import { useState } from "react";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import TextEditor from "../../ui/TextEditor";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [blog, setBlog] = useLocalStorageState([], "blogdata");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogData = { title, tags, author, content, id: uuidv4() };

    // Save blog data to state
    setBlog((prev) => {
      return Array.isArray(prev) ? [...prev, blogData] : [blogData];
    });

    // Clear form fields after submission
    setTitle("");
    setAuthor("");
    setTags("");
    setContent("");

    console.log(blogData);
    toast.success("Post is successfully published!!");
    navigate("/");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Write Your Blog
      </h1>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            fontSize: "20px",
            fontWeight: "bold",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />

        {/* Tags */}
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Tags (e.g., React, JavaScript, Web Development)"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />

        {/* Author */}
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author Name"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />

        {/* Content */}
        <TextEditor content={content} onSetContent={setContent} />

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            backgroundColor: "#0073b1",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            marginLeft: "auto",
          }}
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
