---
hide_table_of_contents: true
---

# Installation errors

**Causes of `pnpm install`/`npm install` or `yarn install` issues can be due to various things which include:**

- Missing or inappropriate dependencies like node or some other environmental issues.
- Dependency resolved by package manager (yarn/npm/pnpm) conflicts with other installed dependency.
- The dependency of the package we use have an internal issue or that dependency has some issue with your environment.
- Package or dependency of the package requires some additional step or configuration to work in your environment.
- Downloaded package is broken or is tampered with.

**To resolve such installation issues:**

- Try using `pnpm` if possible (recommended).
- Please try downloading the fresh package/zip and performing the installation again.
- Please make sure you are using the LTS version of node which is recommended and not one with the latest features.
- Try running the `pnpm cache clean`/`npm cache clean` or `yarn cache clean` command.

**After following the steps explained above, if you are still getting any errors, please [raise support](#) at our support portal with the below details:**
- Your OS information, Node version, yarn/npm/pnpm version, Template/Package version.
- Mention if you can run a fresh react project using `npx create-next-app@latest` without our template/package.
- Attach log file of the error you are getting in your console(provide full log).
- Mention which common you are running.
- Mention if you are were able to run our template on one machine and not on another.