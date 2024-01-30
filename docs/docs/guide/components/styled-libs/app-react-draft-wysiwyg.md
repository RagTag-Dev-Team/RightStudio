---
hide_table_of_contents: true
---

# AppReactDraftWysiwyg

This guide focuses on incorporating the `react-draft-wysiwyg` library, a text editor, into a Next.js application with Material-UI styling. For more information on React Draft WYSIWYG, see the [official documentation](https://jpuri.github.io/react-draft-wysiwyg/#/docs).

## Overview

React Draft WYSIWYG is a text editor based on Draft.js, offering a wide array of customization options and features. To make it aesthetically consistent with Material-UI themes, we have created a custom wrapper component.

## Styling React Draft WYSIWYG

To align the editor's style with Material-UI, we have used Material-UI's styling tools. The `AppReactDraftWysiwyg` component is a styled Box from Material-UI that encompasses the React Draft WYSIWYG editor, applying custom styles for a coherent look.

### Styled Component: AppReactDraftWysiwyg

`AppReactDraftWysiwyg` wraps the React Draft WYSIWYG editor within a styled Material-UI Box, providing Material-UI themed styling to the editor's various elements like the toolbar and text area.

Example: Defining AppReactDraftWysiwyg

```tsx
// MUI and other necessary imports
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import type { BoxProps } from "@mui/material/Box";

import Editor from '@/libs/Editor';

// Type Imports
import type { EditorProps } from "react-draft-wysiwyg";

// Styles
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

type Props = EditorProps & {
  boxProps?: BoxProps;
};

// Styled Components
const EditorWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  // Custom styles for the React Draft WYSIWYG editor...
}));

// Component to render the editor
const AppReactDraftWysiwyg = (props: Props) => {
  const { boxProps, ...rest } = props;

  return (
    <EditorWrapper {...boxProps}>
      <Editor {...rest} />
    </EditorWrapper>
  );
};

export default AppReactDraftWysiwyg;
```

In this setup, `AppReactDraftWysiwyg` enables the integration of the React Draft WYSIWYG editor with Material-UI's design system.

## Implementing the Styled React Draft WYSIWYG

Integrating the styled React Draft WYSIWYG editor into your application is straightforward with `AppReactDraftWysiwyg`.

Example: Controlled Editor Implementation

```tsx
import { useState } from 'react';
import { EditorState } from 'draft-js';
import AppReactDraftWysiwyg from '@/libs/styles/AppReactDraftWysiwyg';

const EditorControlled = () => {
  const [value, setValue] = useState(EditorState.createEmpty());

  return (
    <AppReactDraftWysiwyg
      editorState={value}
      onEditorStateChange={data => setValue(data)}
    />
  );
};

export default EditorControlled;
```

In this example, EditorControlled is a functional component that demonstrates how to use `AppReactDraftWysiwyg` for a controlled editor scenario. It maintains the editor's state and updates it based on user interactions.
