# Editor

This guide covers the process of integrating React Draft Wysiwyg, a rich text editor, into a Next.js project. Given that React Draft Wysiwyg is primarily a client-side library, special handling is required in Next.js to avoid common rendering issues.

## Setting Up React Draft Wysiwyg for Client-Side Rendering

Next.js supports server-side rendering (SSR), but some libraries, like React Draft Wysiwyg, are designed to run only in the browser. Here's how to set it up correctly in Next.js.

### Step 1: Use the 'use client' Directive

We begin by employing the 'use client' directive. This ensures that the component runs only in the browser, thereby avoiding server-side rendering issues. Next, we dynamically import the React Draft Wysiwyg editor using Next.js's dynamic function. This approach is taken to circumvent the 'Window is not defined' error that typically arises when using client-side libraries in a server-rendered environment.

```tsx
'use client';

// Importing dynamic from Next.js
import dynamic from 'next/dynamic';

// Type imports for the editor
import type { EditorProps } from 'react-draft-wysiwyg';

// Dynamically importing React Draft Wysiwyg for client-side use
const ReactDraftWysiwyg = dynamic<EditorProps>(() => import('react-draft-wysiwyg').then(mod => mod.Editor), {
  ssr: false
});

export default ReactDraftWysiwyg;
```

In this snippet, the dynamic import with `{ ssr: false }` ensures that React Draft Wysiwyg is loaded and rendered only on the client side.

### Step 2: Using React Draft Wysiwyg in Your Project

With the setup complete, you can now integrate the React Draft Wysiwyg editor into your Next.js application by simply importing it wherever needed.

```tsx
import ReactDraftWysiwyg from '@/libs/Editor';

// Use the editor in your component
```

This setup allows you to seamlessly add a rich text editor to your Next.js application without encountering server-side rendering issues.
