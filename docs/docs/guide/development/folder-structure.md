# Folder Structure

:::warning Heads Up

Do not make any changes in the `src/@core`, `src/@layout` and `src/@menu` folders unless suggested by our support team. It is the core functionality of the template which is responsible to run the template.

The `src/@core`, `src/@layout` and `src/@menu` folders will receive updates with each new release. Kindly handle these folders with utmost care, as they contain crucial elements that ensure the template runs properly. Unauthorized changes to them could result in conflicts with subsequent updates, potentially disrupting your project.
:::

Understand folder structure of the template and what every folder contains.

## Overview

Before checking folder structure it is better you know some stuff related to folder structure.

- `src/@core`, `src/@layout` and `src/@menu` folders contains core files of template which shall not get modified unless our support team guide you to do it.
- Outside of `src/@core`, `src/@layout` and `src/@menu` folders are files you can move and modify as per your wish. Basically that is your playground where you can modify anything.
- `src/app/api/fake-db` folder just contains dummy data which we get in response of API call. This enables us to take step forward in providing API ready template.
- `src/components` folder outside of `src/@layout` are your layouts which you can modify however you like. Template will always render these layouts.

```plaintext
.
├── public                              -> Stores assets like images, accessible by the web server
├── src
│   ├── @core                           -> Template's core files
│   ├── @layouts                        -> Template's layout files
│   ├── @menu                           -> Template's menu files
│   ├── app                             -> App router to handle the template's routings
│   ├── assets                          -> Static assets, like Svg
│   ├── components                      -> Reusable components for the users
│   ├── configs                         -> Configuration files
│   │   ├── i18n.ts                     -> i18n configurations
│   │   └── themeConfig.ts              -> Template configurations
│   ├── contexts                        -> Your context files go here
│   ├── data                            -> Data files (navigation structure, search data, etc.)
│   │   ├── navigation                  -> Vertical & Horizontal static navigation menu data
│   │   ├── translation                 -> Translation data for localization
│   │   └── searchData.ts               -> Data related to search
│   ├── libs                            -> Third party libraries
│   │   ├── styles                      -> Styles for third party libraries
│   │   ├── ApexCharts                  -> Renders charts in client side
│   │   ├── Editor                      -> Renders editor in client side
│   │   ├── Recharts                    -> Renders charts in client side
│   │   └── auth.ts                     -> Authentication using NextAuth.js
│   ├── middleware.ts                   -> Middleware logic for Next.js
│   ├── prisma                          -> Prisma ORM files, including database schema
│   │   ├── migrations                  -> Database schema change history
│   │   ├── dev.db                      -> SQLite database
│   │   └── schema.prisma               -> Model and schema definitions for Prisma
│   ├── types                           -> Type definitions
|   ├── reducers                        -> Reducers
|   |   └── calendarReducer.ts          -> Reducer for calendar
│   ├── utils                           -> Utility functions
│   └── views                           -> Files that are included in app folder
├── .editorconfig                       -> Configuration file for the editor
├── .env.example                        -> Example environment variables file
├── .eslintrc.js                        -> ESLint configurations (Linting code)
├── .gitignore                          -> Specifies intentionally untracked files to ignore
├── .npmrc                              -> Configuration for npm
├── .prettierrc.json                    -> Prettier configuration for code formatting
├── .stylelintrc.json                   -> Stylelint configuration for style files
├── next.config.js                      -> Configuration file for Next.js
├── package.json                        -> Lists dependencies and project metadata
├── pnpm-lock.yaml                      -> Lock file for pnpm, ensuring consistent installations
├── postcss.config.js                   -> Configuration for PostCSS.
├── tailwind.config.js                  -> Configuration for Tailwind CSS
└── tsconfig.json                       -> TypeScript configuration file
```

## @core folder

`src/@core` folder is the core of our template which contains core components, contexts, hooks, styles, etc where you should not make any change but override them with the help of our docs in case of any changes required in core files.

`src/@core` folder isn't meant to get modified. When you will update our template replacing this `src/@core` folder will hopefully update the template with minimum changes.

:::warning Heads Up
If you want to customize components, utilize the `src/components` folder, which is specifically intended for such modifications and provides a safer avenue for personalization without impacting the core structure of the template.
:::

It's a good idea to have a look at it and know what it contains to use stuff we already invented so you don't have to reinvent the wheel.

### Understanding Core folder

Understanding the `src/@core` folder will save your development time and you will know how to get most out of our template.

| Folder/File    | Description |
|-----------|-------------|
| components | It contains core components of the template. Make sure to check them all in our custom components section |
| contexts | Settings context which is responsible for live template customization |
| hooks | `useSettings` is used to access settings context values |
| styles | Custom styles for the navigation menus, table, all the third party library components and some MUI components |
| svg | SVG components |
| theme | MUI theming like component's overrides, spacing, shadows, etc. & updated MUI types |
| types.ts | It contains all the types of core features like layout, skin, mode etc |


## @layout folder

`src/@layout` folder contains styles, svg, utils, layout components like Blank Layout, Vertical Layout, Horizontal Layout, Layout Wrapper, etc. where you should not make any changes but override them with the help of our docs in case of any changes required in layout files.

`src/@layout` folder isn't meant to get modified. When you will update our template replacing this `src/@layout` folder will hopefully update the template with minimum changes.

:::warning Heads Up
If you want to customize/add any layout, create the `src/layouts` folder. You may copy any layout from the `src/@layouts` folder and paste in the newly created folder and customize it according to your needs.
:::

It's a good idea to have a look at it and know what it contains to use stuff we already invented so you don't have to reinvent the wheel.

### Understanding Layout folder

Understanding the `src/@layout` folder will save your development time and you will know how to get most out of our template.

| Folder/File    | Description |
|-----------|-------------|
| components | It contains layout components of the template like Navbar, Footer, etc. |
| styles | Styled components for horizontal & vertical layout components |
| svg | SVG components |
| utils | Utils classes for layouts |
| BlankLayout.tsx | Blank layout component |
| HorizontalLayout.tsx | Horizontal layout component |
| LayoutWrapper.tsx | Wrapper component to conditionally render Vertical and Horizontal layout |
| VerticalLayout.tsx | Vertical layout component |

### Understanding Menu folder

Understanding the `src/@menu` folder will save your development time and you will know about the menu structure of our template.

| Folder/File    | Description |
|-----------|-------------|
| components | It contains components of the template for vertical & horizontal menu |
| contexts | It contains menu context which is responsible for menu state |
| hooks | It contains hooks to access menu context values |
| horizontal-menu | Horizontal menu imports |
| styles | Styled components for horizontal & vertical menu components |
| svg | SVG components |
| utils | Utils classes and functions for menu |
| vertical-menu | Vertical menu imports |
| defaultConfigs.ts | Default menu configs |
| types.ts | It contains all the types of menu features like menu item, menu config, etc |


### Understanding the App Folder structure
Understanding and Utilizing the App Directory, Learn the essentials of each component and file for effective customization and enhancement of your development.

```plaintext
app
├── [lang]                      -> A dynamic folder for language-specific content, adaptable based on different
|   |                              language codes.
│   ├── (blank-layout-pages)    -> Contains pages that use a blank layout, typically for minimalistic pages like login
│   ├── (dashboard)             -> Houses the main template pages, central to your admin interface
│   ├── [...not-found]          -> A catch-all directory for handling 404 or 'page not found' scenarios
│   ├── layout.tsx              -> The main layout component, which wraps all pages
│   └── page.tsx                -> Manages authentication-based redirection for user access control
├── api                         -> Central location for API-related scripts and services
│   ├── auth                    -> Authentication-related scripts and services
|   ├── fake db                 -> A mock database setup, usually for testing or development purposes
│   └── login                   -> Specific scripts or functions related to the login process
└── globals.css                 -> A CSS file that contains global styles applicable across the entire application
```
