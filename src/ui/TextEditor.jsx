import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function TextEditor({ content, onSetContent }) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "align",
    "link",
    "image",
  ];
  return (
    <ReactQuill
      value={content}
      onChange={onSetContent}
      modules={modules}
      formats={formats}
      placeholder="Write your content here..."
      style={{
        height: "300px",
        marginBottom: "50px",
        border: "1px solid #ddd",
        borderRadius: "5px",
      }}
    />
  );
}

export default TextEditor;
