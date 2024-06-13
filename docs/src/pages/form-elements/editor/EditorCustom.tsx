'use client'

// MUI Imports
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'

// Third-party imports
import { Color } from '@tiptap/extension-color'
import { ListItem } from '@tiptap/extension-list-item'
import { TextStyle } from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { Placeholder } from '@tiptap/extension-placeholder'

const EditorToolbar = () => {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  return (
    <div className='flex flex-wrap gap-x-4 gap-y-2 p-5'>
      <Chip
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        {...(editor.isActive('bold') && { variant: 'tonal', color: 'primary' })}
        label='bold'
      />
      <Chip
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        {...(editor.isActive('italic') && { variant: 'tonal', color: 'primary' })}
        label='italic'
      />
      <Chip
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        {...(editor.isActive('strike') && { variant: 'tonal', color: 'primary' })}
        label='strike'
      />
      <Chip
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        {...(editor.isActive('code') && { variant: 'tonal', color: 'primary' })}
        label='code'
      />
      <Chip onClick={() => editor.chain().focus().unsetAllMarks().run()} label='clear marks'/>
      <Chip onClick={() => editor.chain().focus().clearNodes().run()} label='clear nodes'/>
      <Chip
        onClick={() => editor.chain().focus().setParagraph().run()}
        {...(editor.isActive('paragraph') && { variant: 'tonal', color: 'primary' })}
        label='paragraph'
      />
      <Chip
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        {...(editor.isActive('heading', { level: 1 }) && { variant: 'tonal', color: 'primary' })}
        label='h1'
      />
      <Chip
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        {...(editor.isActive('heading', { level: 2 }) && { variant: 'tonal', color: 'primary' })}
        label='h2'
      />
      <Chip
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        {...(editor.isActive('heading', { level: 3 }) && { variant: 'tonal', color: 'primary' })}
        label='h3'
      />
      <Chip
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        {...(editor.isActive('heading', { level: 4 }) && { variant: 'tonal', color: 'primary' })}
        label='h4'
      />
      <Chip
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        {...(editor.isActive('heading', { level: 5 }) && { variant: 'tonal', color: 'primary' })}
        label='h5'
      />
      <Chip
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        {...(editor.isActive('heading', { level: 6 }) && { variant: 'tonal', color: 'primary' })}
        label='h6'
      />
      <Chip
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        {...(editor.isActive('bulletList') && { variant: 'tonal', color: 'primary' })}
        label=' bulletlist'
      />
      <Chip
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        {...(editor.isActive('orderedList') && { variant: 'tonal', color: 'primary' })}
        label=' orderedlist'
      />
      <Chip
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        {...(editor.isActive('codeBlock') && { variant: 'tonal', color: 'primary' })}
        label=' codeblock'
      />
      <Chip
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        {...(editor.isActive('blockquote') && { variant: 'tonal', color: 'primary' })}
        label='blockquote'
      />
      <Chip onClick={() => editor.chain().focus().setHorizontalRule().run()} label='horizontal rule'/>
      <Chip onClick={() => editor.chain().focus().setHardBreak().run()} label='hard break'/>
      <Chip
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        label='undo'
      />
      <Chip
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        label='redo'
      />
      <Chip
        onClick={() => editor.chain().focus().setColor('var(--mui-palette-primary-main)').run()}
        label='primary'
      />
    </div>
  )
}

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),

  TextStyle,
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false
    }
  }),
  Placeholder.configure({
    placeholder: 'Write something here...'
  })
]

const content = `
  <h2>
    Hi there,
  </h2>
  <p>
    this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you'd probably expect from a text editor. But wait until you see the lists:
  </p>
  <ul>
    <li>
      That's a bullet list with one …
    </li>
    <li>
      … or two list items.
    </li>
  </ul>
  <p>
    Isn't that great? And all of that is editable. But wait, there's more. Let's try a code block:
  </p>
  <pre><code class="language-css">body {
  display: none;
  }</code></pre>
  <p>
    I know, I know, this is impressive. It's only the tip of the iceberg though. Give it a try and click a little bit around. Don't forget to check the other examples too.
  </p>
  <blockquote>
    Wow, that's amazing. Good work, boy! 👏
    <br />
    — Mom
  </blockquote>
`

const EditorCustom = () => {
  return (
    <div className='border rounded-md'>
      <EditorProvider
        slotBefore={
          <>
            <EditorToolbar />
            <Divider />
          </>
        }
        extensions={extensions}
        content={content}
      />
    </div>
  )
}

export default EditorCustom
