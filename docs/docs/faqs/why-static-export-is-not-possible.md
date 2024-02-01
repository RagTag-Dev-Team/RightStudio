---
hide_table_of_contents: true
---

# Why static export is not possible with Next.js?

You might run into problems when you're trying to build your project.

We have used `Dynamic Routes`, `Route Handlers`, `Cookies`, `Redirects`, `Middleware` etc in our project. These features require a Node.js server, or dynamic logic that cannot be computed during the build process. Please refer to [this](https://nextjs.org/docs/app/building-your-application/deploying/static-exports#unsupported-features) link for all the features that are not supported in static export.

For more details, check out the Next.js documentation [here](https://nextjs.org/docs/app/building-your-application/deploying/static-exports).
