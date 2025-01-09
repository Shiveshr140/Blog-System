import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import Menus from "../../ui/Menus";
import TextExpander from "../../ui/TextExpander";
import Modal from "../../ui/Modal";
import CreatePost from "../user/CreatePost";

function Blog({ blog, content }) {
  return (
    <div
      style={{
        position: "relative",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1.5rem",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      {/* Menu Icon Positioned at Top Right */}
      <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={blog.id} />
            <Menus.List id={blog.id}>
              <Menus.Button
                icon={<HiSquare2Stack />}
                onClick={() => alert("Duplicate action")}
              >
                Duplicate
              </Menus.Button>
              <Modal.Open opens="edit">
                <Menus.Button
                  icon={<HiPencil />}
                  onClick={() => alert("Edit action")}
                >
                  Edit
                </Menus.Button>
              </Modal.Open>
              <Modal.Open opens="delete">
                <Menus.Button
                  icon={<HiTrash />}
                  onClick={() => alert("Delete action")}
                >
                  Delete
                </Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreatePost />
            </Modal.Window>

            <Modal.Window name="delete"></Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>

      {/* Blog Content */}
      <h2 style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}>
        {blog.title}
      </h2>
      <h4 style={{ marginBottom: "0.5rem", color: "#555" }}>
        By {blog.author}
      </h4>
      <p style={{ marginBottom: "1rem", fontSize: "0.9rem", color: "#777" }}>
        Tags: <span>{blog.tags}</span>
      </p>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show more"
        collapseButtonText="Show less"
        buttonColor="#ff6622"
      >
        {content}
      </TextExpander>
    </div>
  );
}

export default Blog;

// import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
// import Menus from "../../ui/Menus";
// import TextExpander from "../../ui/TextExpander";

// function Blog({ blog, content }) {
//   return (
//     <div
//       style={{
//         position: "relative",
//         border: "1px solid #ddd",
//         borderRadius: "8px",
//         padding: "1rem",
//         marginBottom: "1.5rem",
//         boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//         backgroundColor: "#fff",
//       }}
//     >
//       {/* Menu Icon Positioned at Top Right */}
//       <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
//         <Menus>
//           <Menus.Menu>
//             <Menus.Toggle id={blog.id} />
//             <Menus.List id={blog.id}>
//               <Menus.Button
//                 icon={<HiSquare2Stack />}
//                 onClick={() => alert("Duplicate action")}
//               >
//                 Duplicate
//               </Menus.Button>
//               <Menus.Button
//                 icon={<HiPencil />}
//                 onClick={() => alert("Edit action")}
//               >
//                 Edit
//               </Menus.Button>
//               <Menus.Button
//                 icon={<HiTrash />}
//                 onClick={() => alert("Delete action")}
//               >
//                 Delete
//               </Menus.Button>
//             </Menus.List>
//           </Menus.Menu>
//         </Menus>
//       </div>

//       {/* Blog Content */}
//       <h2 style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}>
//         {blog.title}
//       </h2>
//       <h4 style={{ marginBottom: "0.5rem", color: "#555" }}>
//         By {blog.author}
//       </h4>
//       <p style={{ marginBottom: "1rem", fontSize: "0.9rem", color: "#777" }}>
//         Tags: <span>{blog.tags}</span>
//       </p>

//       <TextExpander
//         collapsedNumWords={20}
//         expandButtonText="Show more"
//         collapseButtonText="Show less"
//         buttonColor="#ff6622"
//       >
//         {content}
//       </TextExpander>
//     </div>
//   );
// }

// export default Blog;
