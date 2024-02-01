// React Imports
import { useState } from "react";

// Third-party Imports
import { EditorState } from "draft-js";

// Component Imports
import AppReactDraftWysiwyg from "@/libs/styles/AppReactDraftWysiwyg";

const EditorControlled = () => {
  // States
  const [value, setValue] = useState(EditorState.createEmpty());

  return (
    <AppReactDraftWysiwyg
      editorState={value}
      onEditorStateChange={(data: EditorState) => setValue(data)}
    />
  );
};

export default EditorControlled;
