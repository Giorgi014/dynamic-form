import { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/themes/prism.css";
import { JsonForm } from "./FormJSON";

const initialData = JSON.stringify(JsonForm, null, 2);

const JsonFormater = () => {
  const [code, setCode] = useState(initialData);

  const onCodeChange = (newCode) => {
    setCode(newCode);
  };

  return (
    <Editor
      value={code}
      onValueChange={onCodeChange}
      highlight={(code) => highlight(code, languages.json, "json")}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 18,
        backgroundColor: "#f5f5f5",
        border: "1px solid #ddd",
        borderRadius: "5px",
        width: "600px",
        minHeight: "300px",
      }}
    />
  );
};

export default JsonFormater;