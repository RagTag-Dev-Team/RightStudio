'use client'

// React Imports
import React, { useState } from 'react'

// Third-party Imports
import { EditorState } from 'draft-js'

// Component Import
import ReactDraftWysiwyg from '@core/components/ReactDraftWysiwyg'

const EditorControlled = () => {
  // States
  const [value, setValue] = useState(EditorState.createEmpty())

  return <ReactDraftWysiwyg editorState={value} onEditorStateChange={data => setValue(data)} />
}

export default EditorControlled
