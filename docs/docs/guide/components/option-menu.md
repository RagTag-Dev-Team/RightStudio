# OptionMenu

## Overview

The `OptionMenu` component is a flexible and customizable menu component, using Material-UI (MUI) for styling and Next.js for navigation. It allows for the creation of a dropdown menu with various types of items, including links, dividers, and standard menu items. This component is ideal for implementing context menus, action lists, or more complex dropdowns in your web application.

## Props

The `OptionMenu` component accepts the following props, structured to customize its behavior and appearance:

| Prop              | Type              | Description                                                                 |
|-------------------|-------------------|-----------------------------------------------------------------------------|
| `icon`            | `ReactNode`       | Optional. A React node to be used as the icon for the menu button           |
| `options`         | `OptionType[]`    | An array of options to be displayed in the menu. Can be strings, dividers, or menu items. |
| `leftAlignMenu`   | `boolean`         | Optional. If `true`, aligns the menu to the left of the button. Default is right-aligned. |
| `iconButtonProps` | `IconButtonProps` | Optional. props for the Material-UI `IconButton` component.              |

## Types

- `OptionDividerType`: Used for creating dividers in the menu.
- `OptionMenuItemType`: Used for creating items in the menu with optional icons, links, and custom props.
- `OptionType`: A union type of `string`, `OptionDividerType`, or `OptionMenuItemType`.

### OptionDividerType Props

| Prop           | Type           | Description                                             |
|----------------|----------------|---------------------------------------------------------|
| `divider`      | `boolean`      | Must be `true` to render a divider.                     |
| `dividerProps` | `DividerProps` | Optional. Props to be passed to the MUI Divider component. |

### OptionMenuItemType Props

| Prop            | Type              | Description                                                      |
|-----------------|-------------------|------------------------------------------------------------------|
| `text`          | `ReactNode`       | The text to display for the menu item.                           |
| `icon`          | `ReactNode`       | Optional. An icon to display alongside the text.                 |
| `href?`         | `LinkProps['href']` | Optional. A URL or path to navigate to when the menu item is clicked. |
| `linkProps`     | `BoxProps`        | Optional. Props for the link component when `href` is used.      |
| `menuItemProps` | `MenuItemProps`   | Optional. Props to be passed to the MUI MenuItem component.      |

## Usage

Here is an example of how to use the `OptionMenu` component:

```tsx
import OptionMenu from '@core/components/option-menu';

const Component = () => {
  return (
    ...
    <OptionMenu
      options={[
        "Share Connection",
        "Block Connection",
        { divider: true },
        { text: "Delete", menuItemProps: { className: "text-error" } },
      ]}
      iconButtonProps={{ className: "absolute" }}
    />
    ...
  );
};

export default Component;
```

In this example, the OptionMenu is provided with a mix of string options and object options for creating menu items and dividers.

## Override Component

It is not recommended to make changes in the `src/@core` folder, so create a new file (say `src/components/option-menu/index.tsx`). Copy the code from `src/@core/components/option-menu/index.tsx` file, paste it into the new file, and make necessary modifications as per your requirements. Also don't forgot to copy the `src/@core/components/option-menu/types.ts` file to `src/components/option-menu/types.ts.`

The `OptionMenu` component is a versatile tool for creating dropdown menus with various options, including links, actions, and dividers. Its flexibility and integration with MUI and Next.js make it suitable for a wide range of applications in modern web development.
