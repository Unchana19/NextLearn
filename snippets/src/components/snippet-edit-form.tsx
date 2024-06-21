"use client";

import { FC, useState } from "react";
import type { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import * as actions from "@/actions";

interface Props {
  snippet: Snippet;
}

const SnippetEditForm: FC<Props> = ({ snippet }: Props): JSX.Element => {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={code}
        options={{
          minimap: { enabled: false },
        }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button type="submit" className="p-2 border rounded">
          Save
        </button>
      </form>
    </div>
  );
};

export default SnippetEditForm;
