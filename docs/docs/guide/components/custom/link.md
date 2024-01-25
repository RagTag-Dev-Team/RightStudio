# Link

In Next.js applications, handling `Link` and click events on the server side can lead to errors if not managed correctly. A common practice to address this issue is to use the 'use client' directive at the top of each page containing a `Link`. However, this can be repetitive and error-prone when links are used extensively throughout the project. To simplify this process, we have created a custom Link that incorporates 'use client', reducing its usage to just one place in the project.

## Usage

```tsx
import Link from '@components/Link';

const Component = () => {
  return (
    ...
    <div>
      <Link>Learn more.</Link>
    </div>
    ...
  );
};

export default Component;
```
