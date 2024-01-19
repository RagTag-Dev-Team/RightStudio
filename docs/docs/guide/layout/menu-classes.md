# Menu Classes

We provide a comprehensive set of classes for different menu types including vertical and horizontal menus. These classes are designed to assist in customizing the menu of your application. You can find these classes in the `src/@menu/utils/menuClasses.ts` file. You can also create and use your own custom classes for more specific menu needs.

## List of classes

### Common Classes

| Variable Name      | Class Name              |
| :----------------- | :---------------------- |
| root               | ts-menu-root            |
| menuSectionRoot    | ts-menusection-root     |
| menuItemRoot       | ts-menuitem-root        |
| subMenuRoot        | ts-submenu-root         |
| button             | ts-menu-button          |
| prefix             | ts-menu-prefix          |
| suffix             | ts-menu-suffix          |
| label              | ts-menu-label           |
| icon               | ts-menu-icon            |
| menuSectionWrapper | ts-menu-section-wrapper |
| menuSectionContent | ts-menu-section-content |
| menuSectionLabel   | ts-menu-section-label   |
| subMenuContent     | ts-submenu-content      |
| subMenuExpandIcon  | ts-submenu-expand-icon  |
| openActive         | ts-open-active          |
| disabled           | ts-disabled             |
| active             | ts-active               |
| open               | ts-open                 |

### Vertical Menu Classes

| Variable Name     | Class Name                         |
| :---------------- | :--------------------------------- |
| root              | ts-vertical-nav-root               |
| container         | ts-vertical-nav-container          |
| bgColorContainer  | ts-vertical-nav-bg-color-container |
| header            | ts-vertical-nav-header             |
| image             | ts-vertical-nav-image              |
| backdrop          | ts-vertical-nav-backdrop           |
| collapsed         | ts-collapsed                       |
| toggled           | ts-toggled                         |
| hovered           | ts-hovered                         |
| scrollWithContent | ts-scroll-with-content             |
| breakpointReached | ts-breakpoint-reached              |
| collapsing        | ts-collapsing                      |
| expanding         | ts-expanding                       |

### Horizontal Menu Classes

| Variable Name      | Class Name             |
| :----------------- | :--------------------- |
| root               | ts-horizontal-nav-root |
| scrollWithContent  | ts-scroll-with-content |
| breakpointReached  | ts-breakpoint-reached  |

## How to create your custom classes?

To create your own custom menu classes, start by making a new file (say, `src/utils/userMenuClasses.ts`). You can use `src/@menu/utils/menuClasses.ts` file as a reference. Here's a pattern you can follow in your custom file:

```ts title="src/utils/userMenuClasses.ts"
export const verticalNavClasses = {
  customClass: 'custom-menu-class'
}
```

You may copy the code from the `src/@menu/utils/menuClasses.ts` file and paste it in the newly created file. Then, you can add your custom classes to the objects.

## How to use your custom classes?

You need to import the custom classes in the file where you want to use them in the following way:

```tsx
import { verticalNavClasses } from 'src/utils/userMenuClasses'

<Menu className={verticalNavClasses.customClass}>
  ...
</Menu>
```

That's it!
