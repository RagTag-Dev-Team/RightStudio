# Form

## Overview

In Next.js applications, handling form submissions and click events on the client side can lead to errors if not managed correctly. A common practice to address this issue is to use the 'use client' directive at the top of each page containing a form. However, this can be repetitive and error-prone when forms are used extensively throughout the project. To simplify this process, we have created a custom `FormComponent` that incorporates 'use client', reducing its usage to just one place in the project.

## Usage

To use the FormComponent in your Next.js application, follow these steps:
  
```tsx
import Form from '@components/Form'

function MyForm() {
  const handleSubmit = (event) => {
    // Handle form submission
    event.preventDefault();
    // Form submission logic
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Your form fields */}
    </Form>
  );
}
```

Handling Submissions: The `onSubmit` prop is used to define the form submission logic. This method is similar to how it's used with a standard `<form>` element.
