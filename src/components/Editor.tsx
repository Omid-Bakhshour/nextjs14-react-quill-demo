"use client"

import {useMemo, useState } from "react";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";
import '@/styles/quill.css'

const Editor = () => {
  // Editor state
  const [value, setValue] = useState("");

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [false, 1, 2, 3, 4, 5, 6] }],
          ["bold", "italic", "underline", "blockquote"],
          // [{ size: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link",{ 'align': [] }],
        ],
      
      },
      clipboard: {
        matchVisual: true,
      },
    }),
    []
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    'align'
  ];

  return (
    <div className="p-5">
      <label >Editor Content</label>
      <QuillEditor
        theme="snow"
        value={value}
        formats={formats}
        modules={modules}
        onChange={(value) => setValue(value)}
      />
    </div>
  );
};

export default Editor;