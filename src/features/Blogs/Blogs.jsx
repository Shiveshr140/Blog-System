import { useSearchParams } from "react-router-dom";
import { useBlog } from "../../contexts/BlogContext";
import Menus from "../../ui/Menus";
import Blog from "./Blog";
import BlogOperations from "./BlogsOperation";

/////************* This Blogs Component is for showing all blogs
//// I have done all blogs operations here such filter, sorting and searching and then passed blogs array

function Blogs() {
  const { blogs, searchInput } = useBlog();
  const [searchParams] = useSearchParams();

  // Filter
  const currentTag = searchParams.get("tag") || "all";
  console.log("Current Tag:", currentTag);

  const filteredBlogs = blogs.filter((blog) => {
    if (currentTag === "all") return true;

    const normalizedTags = blog.tags
      .split(",")
      .map((tag) => tag.trim().toLowerCase());

    return normalizedTags.includes(currentTag.toLowerCase());
  });

  // SortBy
  const sortBy = searchParams.get("sortBy") || "createdAt-dsec";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  const sortedBlogs = filteredBlogs.sort((a, b) => {
    const valueA = a[field];
    const valueB = b[field];

    if (valueA < valueB) return -1 * modifier;
    if (valueA > valueB) return 1 * modifier;
    return 0;
  });

  // Search
  let searchBlogs;
  if (searchInput) {
    // if (!searchParams.has("tag") || searchParams.get("tag") !== "all") {
    //   searchParams.set("tag", "all");
    // }
    searchBlogs = sortedBlogs.filter((blog) => {
      const searchTerm = searchInput.toLowerCase();
      return (
        blog.author.toLowerCase().includes(searchTerm) ||
        blog.title.toLowerCase().includes(searchTerm) ||
        blog.tags.toLowerCase().includes(searchTerm)
      );
    });
  } else {
    searchBlogs = sortedBlogs;
  }

  return (
    <Menus>
      <BlogOperations />

      <ul
        style={{
          listStyle: "none",
          padding: "0",
          margin: "20px auto",
          maxWidth: "800px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {searchBlogs.map((blog) => {
          const plainTextContent = blog.content.replace(/<\/?[^>]+(>|$)/g, "");

          return (
            <li
              key={blog.id}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <Blog blog={blog} textContent={plainTextContent} />
            </li>
          );
        })}
      </ul>
    </Menus>
  );
}

export default Blogs;
