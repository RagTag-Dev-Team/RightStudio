---
hide_table_of_contents: true
---

# Why app runs slow in local?

There are two main reasons why the app runs slow in your local system:

### Complexity of MUI Components

MUI is known for its comprehensive and feature-rich components. However, this complexity can sometimes lead to slower rendering times, especially when these components are being rendered for the first time in a development environment. Complex components require more computing resources to render, which can be noticeable on less powerful machines or when the application is handling a large number of these components simultaneously.

### Styling with Emotion

MUI components utilize the sx prop and the styled function for inline styling, relying on [Emotion](https://emotion.sh/docs/introduction), a popular CSS-in-JS library. While Emotion provides powerful styling capabilities, it can also add some overhead to the rendering process. This is because Emotion dynamically generates and injects CSS into the DOM, a process that can be more resource-intensive than traditional CSS, particularly during development when hot reloading and other development tools are in use.

For a more in-depth understanding of performance considerations with MUI, particularly version 5, refer to this [MUI GitHub discussion](https://github.com/mui/material-ui/discussions/29268). It provides insights into specific issues and optimizations related to MUI.

## Performance in Production

It's important to note that these performance issues are generally confined to the local development environment. When your application is deployed:

- On a Server: The application typically runs with optimized production builds, which significantly reduces the impact of these issues.
- Local Production Build: Running a production build of your application locally can also offer a more realistic assessment of its performance.
