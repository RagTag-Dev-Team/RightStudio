'use client'

// React Imports
import { useState } from 'react'

// Third-party Imports
import { EditorState } from 'draft-js'

// Component Import
import AppReactDraftWysiwyg from '@core/styles/libs/AppReactDraftWysiwyg'

const EditorControlled = () => {
  // States
  const [value, setValue] = useState(EditorState.createEmpty())

  return <AppReactDraftWysiwyg editorState={value} onEditorStateChange={data => setValue(data)} />
}

export default EditorControlled
