# Dynamic Routes in Menu

Learn how to add links for dynamic routes in the menu.

To create dynamic routes, refer to the [official Next.js documentation](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes).

#### Issues we faced previously

If you had two dynamic routes with the same parameter/slug name, you might be redirected to the wrong page.

#### How to fix the issue?

We introduced `exactMatch` and `activeUrl` props in the `MenuItem` component to address this issue.

<!-- truncate -->

#### Understanding the issue with an example

Consider the routes `/products/[id]` and `/blogs/[id]` in your menu. If the active route is `/products/46` and you click on the blogs' link, you will be redirected to `/blogs/46`. If there's no blog with id `46`, you'll see a 404 page.

Previously, you might have used the following code for the static menu:

```tsx
import { useParams } from 'next/navigation'

const MenuComponent = (/* props */) => {
  const { id } = useParams()

  return (
    /* ... */
      <MenuItem href={`/products/${id}`}>Products</MenuItem>
      <MenuItem href={`/blogs/${id}`}>Blogs</MenuItem>
    /* ... */
  )
}
```

For the dynamic menu, you might have used:

```ts
const menuDataFile = (params, /* other parameters */) => [
  /* ... */
  {
    label: 'Products',
    href: `/products/${params.id}`,
  },
  {
    label: 'Blogs',
    href: `/blogs/${params.id}`,
  },
  /* ... */
]
```

#### Understanding the solution

##### `exactMatch` and `activeUrl` Props

By default, `exactMatch` is set to `true`. In this case, you don't need to pass the `activeUrl` prop in the `MenuItem` component. The `MenuItem` component will be active if the current URL exactly matches the `href` prop. Clicking the link redirects to the URL in the `href` prop.

If `exactMatch` is set to `false`, you must pass the `activeUrl` prop in the `MenuItem` component. The `MenuItem` component will will be active if the current URL contains the `activeUrl` prop. Clicking the link redirects to the URL in the `href` prop.

##### Using the props

Here's how to use the `exactMatch` and `activeUrl` props in the `MenuItem` component in the static menu:

```tsx
const MenuComponent = (/* props */) => {
  return (
    /* ... */
      <MenuItem href='/products/1' exactMatch={false} activeUrl='/products'>
        Products
      </MenuItem>
      <MenuItem href='/blogs/1' exactMatch={false} activeUrl='/blogs'>
        Blogs
      </MenuItem>
    /* ... */
  )
}
```

And in the dynamic menu:

```ts
const menuDataFile = (/* other parameters */) => [
  /* ... */
  {
    label: 'Products',
    href: '/products/1',
    exactMatch: false,
    activeUrl: '/products',
  },
  {
    label: 'Blogs',
    href: '/blogs/1',
    exactMatch: false,
    activeUrl: '/blogs',
  },
  /* ... */
]
```

Using the above code, all the dynamic routes such as `/products/1`, `/products/2`, `/products/3`, etc. will be active for the `Products` link and all the routes like `/blogs/1`, `/blogs/2`, `/blogs/3`, etc. will be active for the `Blogs` link.
