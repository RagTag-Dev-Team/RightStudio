import BrowserOnly from "@docusaurus/BrowserOnly";

const EditorUncontrolled = () => {
  return (
    <BrowserOnly>
      {() => {
        const { Editor } = require("react-draft-wysiwyg");

        return <Editor />;
      }}
    </BrowserOnly>
  );
};

export default EditorUncontrolled;
