# Customizing our Components

## Overview

This guide provides a straightforward approach to customize our components in your project. Whether you're dealing with components in the `src/@core`, `src/@layouts`, `src/@menu` or `src/components` folders, this document outlines the steps to customize them according to your needs.

## Components in our core folders

:::danger Heads up!
Do not make any changes in the `src/@core`, `src/@layout` and `src/@menu` folders unless suggested by our support team. It is the core functionality of the template which is responsible to run the template.

The `src/@core`, `src/@layout` and `src/@menu` folders will receive updates with each new release. Kindly handle these folders with utmost care, as they contain crucial elements that ensure the template runs properly. Unauthorized changes to them could result in conflicts with subsequent updates, potentially disrupting your project.
:::

If you want to customize components located in the `src/@core`, `src/@layouts`, or `src/@menu` folders, you should follow the steps below:

1. Creating a new file:

   - Create a new file in the `src/components` folder
   - Copy the code from the original component file (located in `src/@core`, `src/@layouts`, or `src/@menu`) and paste it into the new file
   - Make the necessary changes in this new file according to your project requirements

2. Updating imports: After creating and modifying the new component, remember to update the import paths in your project to point to the new component file.

### Example

Let's say you want to customize our Customizer component located in `src/@core/components/customizer` folder. To do this, you should follow the steps below:

1. Copy the `src/@core/components/customizer` folder and paste it into the `src/components` folder
2. Make the necessary changes in the `src/components/customizer` folder according to your project requirements
3. Search for the `'@core/components/customizer'` import path in your project and update it to `'@components/customizer'`

That's it! You have successfully customized the Customizer component in your project and maintained the integrity of the core components.

You can customize any component in the `src/@core`, `src/@layouts`, or `src/@menu` folders by following the steps outlined above.

## Components in src/components

If the component you wish to customize is located in the `src/components` folder, you can directly modify the component file. Just follow the steps below:

1. Locate the component file in the `src/components` folder
2. Make the necessary changes in the component file according to your project requirements.

## Conclusion

By following these steps, you can effectively customize components in your project while maintaining the integrity of the core components. This approach ensures that your modifications are safely segregated, making future updates and maintenance more manageable.
