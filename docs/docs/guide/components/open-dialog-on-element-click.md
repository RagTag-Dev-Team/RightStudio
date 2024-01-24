# OpenDialogOnElementClick

## Overview

The `OpenDialogOnElementClick` component is a reusable component that encapsulates the functionality of opening a dialog upon clicking a specified element. This component is designed to be flexible, allowing any React component to be passed as the clickable element and the dialog component to reduce the unnecessary repetition of dialog component code.

## Props

The component accepts the following props:

| Prop          | Description                                                     | Required |
|---------------|-----------------------------------------------------------------|----------|
| `element`     | A React component that will act as the clickable element.       | Yes      |
| `dialog`      | Dialog component that will be opened upon clicking the element. | Yes      |
| `elementProps`|  Props to be passed to the clickable element.                   | No       |
| `dialogProps` |  Props to be passed to the dialog component.                    | No       |

## Usage

To use the `OpenDialogOnElementClick` component, refer these example:

```tsx
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

const YourComponent = () => {
  const elementProps = {/* ... */};

  return (
    ...
    <OpenDialogOnElementClick
      element={YourElementComponent}
      dialog={YourDialogComponent}
      elementProps={elementProps}
      dialogProps={dialogProps}
    />
    ...
  );
}
```

## Component Behavior

- OnClick Event: When the element is clicked, the dialog component will be opened.
- State Management: The open state of the dialog is managed internally within the component using React's useState.
- Flexibility: The component is designed to be flexible and can be used with any React components as the element and dialog.

The `OpenDialogOnElementClick` component offers a convenient and reusable way to integrate dialog-opening functionality into your project. Its flexibility and ease of use make it suitable for various scenarios where a dialog needs to be triggered by an element click.
