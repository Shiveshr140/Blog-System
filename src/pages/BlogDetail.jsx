import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useBlog } from "../contexts/BlogContext";
import { format } from "date-fns";
import { HiArrowLeft } from "react-icons/hi2";

function BlogDetailPage() {
  const { id } = useParams();
  const { blogs } = useBlog();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const selectedBlog = blogs.find((b) => b.id === id);
    setBlog(selectedBlog);
  }, [id, blogs]);

  if (!blog) {
    return <div className="text-center">Loading...</div>;
  }

  //// this is done to convert the content into plain text as content that we get from text editor is html
  const content = blog.content.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="rounded-lg bg-white p-5 shadow-lg">
        <h1 className="mb-4 text-3xl font-semibold text-gray-900">
          {blog.title}
        </h1>
        <p className="mb-2 text-sm text-gray-500">By {blog.author}</p>
        <p className="mb-2 text-sm text-gray-500"> Tags: {blog.tags}</p>
        <p className="mb-2 text-sm text-gray-500">
          Created: {format(blog.createdAt, "MMM dd, yyyy")}
        </p>
        <div className="mb-4 text-lg text-gray-700">
          <p>{content}</p>
        </div>
        <div className="mt-5 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            <HiArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailPage;
