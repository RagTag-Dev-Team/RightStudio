// React Imports
import { useState } from 'react'

import BrowserOnly from '@docusaurus/BrowserOnly'

// Third-party Imports
import { EditorState } from 'draft-js'

const EditorControlled = () => {
  // States
  const [value, setValue] = useState(EditorState.createEmpty())

  return (
    <BrowserOnly>
      {() => {
        const { Editor } = require('react-draft-wysiwyg')

        return <Editor editorState={value} onEditorStateChange={(data: EditorState) => setValue(data)} />
      }}
    </BrowserOnly>
  )
}

export default EditorControlled
