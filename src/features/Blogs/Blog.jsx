import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { v4 as uuidv4 } from "uuid";
import Menus from "../../ui/Menus";
import TextExpander from "../../ui/TextExpander";
import Modal from "../../ui/Modal";
import { useBlog } from "../../contexts/BlogContext";
import ConfirmDelete from "../../ui/ConfirmDelete";
import toast from "react-hot-toast";
import { format } from "date-fns";
import { useUser } from "../../contexts/UserContext";
import { useDarkMode } from "../../contexts/DarkmodeContext";
import DetailReposit from "../../ui/DetailReposit";
import NotAuthorized from "../../ui/NotAuthorized";
import CreateEditBlog from "./CreateEditBlog";

////*********************** This Blog Component basically the blog card
//// I have the combined to two compound components modal and menu in order to maked that edit,delete duplication icons work

function Blog({ blog, textContent }) {
  const { isDarkMode } = useDarkMode();
  const { setBlogs } = useBlog();
  const { username } = useUser();
  const { title, content, author, tags, id, createdAt, reposted } = blog || {};
  const userIsAuthor = username.trim() === author.trim();

  function handleRepost() {
    toast.success("Post is successfully reposted");
    if (!blog) return;
    const blogData = {
      title,
      tags,
      author,
      content,
      createdAt,
      id: uuidv4(),
      reposted: true,
    };

    setBlogs((prev) => {
      const newBlogs = Array.isArray(prev) ? [blogData, ...prev] : [blogData];
      return newBlogs;
    });
  }

  function handleDuplicate() {
    toast.success("Post is successfully reposted");
    if (!blog) return;
    const blogData = {
      title,
      tags,
      author,
      content,
      createdAt: new Date().toISOString().split("T")[0],
      id: uuidv4(),
      reposted: false,
    };

    setBlogs((prev) => {
      const newBlogs = Array.isArray(prev) ? [blogData, ...prev] : [blogData];
      return newBlogs;
    });
  }

  function handleDelete() {
    toast.success("Post is successfully deleted");
    setBlogs((prev) => {
      return prev.filter((blog) => blog.id !== id);
    });
  }

  return (
    <div
      className={`relative border ${
        isDarkMode ? "border-gray-700" : "border-gray-300"
      } mb-6 rounded-lg p-6 shadow-md ${
        isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
      } transition-all duration-300`}
    >
      {/* Menu Icon Positioned at Top Right */}
      <div className="absolute right-4 top-4 z-10">
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={blog.id} />
            {userIsAuthor || reposted ? (
              <Menus.List id={blog.id}>
                <Menus.Button
                  icon={<HiSquare2Stack />}
                  onClick={handleDuplicate}
                >
                  Duplicate
                </Menus.Button>
                <Modal.Open opens="edit">
                  <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                </Modal.Open>
                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>
            ) : (
              <Menus.List id={blog.id}>
                <NotAuthorized />
              </Menus.List>
            )}
            <Modal.Window name="edit">
              <CreateEditBlog blog={blog} isModal={true} />
            </Modal.Window>
            <Modal.Window name="delete">
              <ConfirmDelete resourceName="post" onConfirm={handleDelete} />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>

      {/* Blog Content */}
      <h2
        className={`mb-[.5px] max-w-[90%] text-xl font-semibold ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}
      >
        {blog.title}
      </h2>
      {blog.reposted && (
        <p className="mb-[.7px] text-sm italic text-green-500">
          Reposted by {username}
        </p>
      )}
      <h4
        className={`mb-[.7px] text-base ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        By {blog.author}
      </h4>
      <p
        className={`mb-[.7px] text-sm ${
          isDarkMode ? "text-gray-500" : "text-gray-600"
        }`}
      >
        Tags: <span className="font-medium">{blog.tags}</span>
      </p>
      <p
        className={`mb-2 text-sm ${
          isDarkMode ? "text-gray-500" : "text-gray-600"
        }`}
      >
        Created: <span>{format(blog.createdAt, "MMM dd, yyyy")}</span>
      </p>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Read more"
        collapseButtonText="Read less"
        buttonColor={isDarkMode ? "#4caf50" : "#2a99cd"}
      >
        {textContent}
      </TextExpander>
      <DetailReposit onRepost={handleRepost} id={id} />
    </div>
  );
}

export default Blog;
