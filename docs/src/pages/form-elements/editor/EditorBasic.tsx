'use client'

// MUI Imports
import Divider from '@mui/material/Divider'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

// Third-party imports
import { useEditor, EditorContent } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { Underline } from '@tiptap/extension-underline'
import { Placeholder } from '@tiptap/extension-placeholder'
import { TextAlign } from '@tiptap/extension-text-align'

// Components Imports
import EditorToolbar from '@components/editor/EditorToolber'

const EditorBasic = ({ content }: { content?: string }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Write something here...'
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph']
      }),
      Underline
    ],

    content:
      content ??
      `
      <p>
        This is a radically reduced version of tiptap. It has support for a document, with paragraphs and text. That's it. It's probably too much for real minimalists though.
      </p>
      <br />
      <p>
        The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.
      </p>
    `
  })

  return (
    <Card className='p-0'>
      <CardContent className='p-0'>
        <EditorToolbar editor={editor} />
        <Divider />
        <EditorContent editor={editor} className='bs-[200px] overflow-y-auto flex' />
      </CardContent>
    </Card>
  )
}

export default EditorBasic
