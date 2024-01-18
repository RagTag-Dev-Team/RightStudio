# Installation warnings

while running `pnpm install`, `yarn install` or `npm install`, you may encounter warnings related to the libraries or packages we utilize.

We consistently update our packages with each major release of our template. However, it's possible that the authors of these packages have included older dependencies to maintain backward compatibility or due to specific code-related reasons. Rest assured, these dependencies are fully compatible and function effectively with our template.

Please also ensure that you have not overlooked any files beginning with a dot, such as `.eslintrc.json`, `.editorconfig` etc.

For further verification, you can install these packages in a new React project, independent of our template. You'll likely observe similar warnings, indicating that they are common to the packages themselves, not exclusive to our template.