import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// 1. Header: Allows the user to select a header (h1, h2, h3) or no header at all (false), 2. style, 3. list options:allow orderd or bullet, 4. alignment, 5. link ad image, 6. clean: Provides an option to remove all formatting.
// modules={modules}: The toolbar options and functionality (as defined above).
// formats={formats}: Defines what content formats are supported by the editor
// theme="snow": This applies the "snow" theme for the Quill editor, which is a light, clean theme.
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
