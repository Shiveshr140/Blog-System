import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import TextEditor from "../../ui/TextEditor";
import { useNavigate } from "react-router-dom";
import { useBlog } from "../../contexts/BlogContext";
import { useDarkMode } from "../../contexts/DarkmodeContext";

////****** CreateEditBlog
//// You can create blog and edit the  blog with same form, if I pass the blog as prop then it will be used for editing

function CreateEditBlog({ blog = {} }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const { setBlogs } = useBlog();
  // const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (blog && blog.content) {
      setTitle(blog.title);
      setTags(blog.tags);
      setAuthor(blog.author);
      setContent(blog.content);
    }
  }, [blog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content === "") {
      toast.error(`Please fill the content`);
      return;
    }

    let blogData;

    if (blog.id) {
      // Updating existing blog
      toast.success("Post is successfully updated!!");
      const updatedBlogData = { ...blog, title, tags, author, content };

      setBlogs(
        (prev) =>
          prev.map((prevBlog) =>
            prevBlog.id === blog.id ? updatedBlogData : prevBlog,
          ),
        navigate("/blogs"),
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
          required
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
          required
        />

        {/* Author */}
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder={blog.author ? "" : "Author Name"}
          className="w-full rounded border border-gray-300 p-2.5 text-black"
          required
        />

        {/* Content */}
        <TextEditor
          content={content || ""}
          onSetContent={setContent}
          blog={blog}
        />

        {/* Submit Button */}
        <button className="ml-auto cursor-pointer rounded border-none bg-[#0073b1] px-5 py-2 text-base text-white">
          Publish Blog
        </button>
      </form>
    </div>
  );
}

export default CreateEditBlog;
