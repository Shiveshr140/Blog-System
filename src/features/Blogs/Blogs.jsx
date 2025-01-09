import { useBlog } from "../../contexts/BlogContext";
import Menus from "../../ui/Menus";
import Blog from "./Blog";

function Blogs() {
  const { blogs, setBlog } = useBlog();
  return (
    <Menus>
      <ul>
        {blogs.map((blog) => {
          // Strip HTML tags and extract plain text
          const plainTextContent = blog.content.replace(/<\/?[^>]+(>|$)/g, "");

          return <Blog blog={blog} content={plainTextContent} />;
        })}
      </ul>
    </Menus>
  );
}

export default Blogs;
