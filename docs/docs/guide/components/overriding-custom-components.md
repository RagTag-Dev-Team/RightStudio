# Overriding Custom Components

## Introduction

This guide provides a straightforward approach to overriding custom components in your project. Whether you're dealing with components in the `src/@core` or `src/components` folders, this document outlines the steps to customize them according to your needs.

## Methods to Override Components

### Overriding Components in src/@core

1. Avoid Direct Changes: It's generally not recommended to modify files directly in the `src/@core` folder.

2. Creating a New File:

    - Step 1: Create a new file in an appropriate location, for example, `src/components/custom-component/index.tsx`.
    - Step 2: Copy the code from the existing component at `src/@core/components/custom-component/index.tsx` and paste it into your new file.
    - Step 3: Make the necessary changes in this new file according to your project requirements.

3. Updating Imports: After creating and modifying the new component, remember to update the import paths in your project to point to this new file.

### Overriding Components in src/components

1. Direct Modification: If the component you wish to override is located in the `src/components` folder, you can directly modify the component file.

    - Step 1: Navigate to the specific component file within the `src/components` folder.
    - Step 2: Make your desired changes directly in this file.

By following these methods, you can effectively customize components in your project while maintaining the integrity of the core components. This approach ensures that your modifications are safely segregated, making future updates and maintenance more manageable.
