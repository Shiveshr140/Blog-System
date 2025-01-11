import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function TextEditor({ content, onSetContent, blog }) {
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

  const handleEditorChange = (value) => {
    console.log("value", value);
    onSetContent(value);
  };

  return (
    <ReactQuill
      value={content}
      onChange={handleEditorChange}
      modules={modules}
      formats={formats}
      placeholder={blog?.content ? "" : "Write your content here..."}
      className={`mb-10 w-full`}
      theme="snow"
    />
  );
}

export default TextEditor;
