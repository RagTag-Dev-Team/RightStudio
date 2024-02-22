# Menu Styling

In this section, you will learn how we have styled the menu and how you can customize it to fit your needs.

## Our Menu Styling

We have styled the menu according to the layout: Vertical layout and Horizontal layout.

### Vertical Layout

Menu styling for the Vertical layout is divided into three parts:

1. **Root Styles**

    For defining the navigation menu styles—excluding menu item, submenu, and menu section styles—we've created the `src/@core/styles/vertical/navigationCustomStyles.ts` file. This file is then imported and utilized within the `src/components/layout/vertical/Navigation.tsx` file to apply the styles.

    ```tsx title="src/components/layout/vertical/Navigation.tsx"
    import navigationCustomStyles from '@core/styles/vertical/navigationCustomStyles'

    <VerticalNav
      customStyles={navigationCustomStyles(/* parameters */)}
      ...
    >
    ```

    You may refer to the [Navigation Custom Styles](/docs/menu-examples/vertical-examples/vertical-nav/custom-styles) example.

2. **Menu Item Styles**

    For defining the menu item and submenu styles, we've created the `src/@core/styles/vertical/menuItemStyles.ts` file. This file is then imported and utilized within the `src/components/layout/vertical/VerticalMenu.tsx` file to apply the styles.

    ```tsx title="src/components/layout/vertical/VerticalMenu.tsx"
    import menuItemStyles from '@core/styles/vertical/menuItemStyles'

    <Menu
      menuItemStyles={menuItemStyles(/* parameters */)}
      ...
    >
    ```

    You may refer to the [Menu Item Styles](/docs/menu-examples/vertical-examples/menu/menu-item-styles) example.

3. **Menu Section Styles**

    For defining the menu section styles, we've created the `src/@core/styles/vertical/menuSectionStyles.ts` file. This file is then imported and utilized within the `src/components/layout/vertical/VerticalMenu.tsx` file to apply the styles.

    ```tsx title="src/components/layout/vertical/VerticalMenu.tsx"
    import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

    <Menu
      menuSectionStyles={menuSectionStyles(/* parameters */)}
      ...
    >
    ```

    You may refer to the [Menu Section Styles](/docs/menu-examples/vertical-examples/menu/menu-section-styles) example.

### Horizontal Layout

Menu styling for the Horizontal layout is divided into various parts:

1. **Navigation Content Wrapper Styles**

    For defining the navigation content wrapper styles, we've created the `StyledDiv` styled component within the `src/components/layout/horizontal/Navigation.tsx` file.

2. **Menu Root Styles**

    For defining the menu root styles, we've created the `src/@core/styles/horizontal/menuRootStyles.ts` file. This file is then imported and utilized within the `src/components/layout/horizontal/HorizontalMenu.tsx` file to apply the styles.

    ```tsx title="src/components/layout/horizontal/HorizontalMenu.tsx"
    import menuRootStyles from '@core/styles/horizontal/menuRootStyles'

    <Menu
      rootStyles={menuRootStyles(/* parameters */)}
      ...
    >
    ```

    You may refer to the [Menu Root Styles](/docs/menu-examples/horizontal-examples/menu/root-styles) example.

3. **Menu Item Styles**

    For defining the menu item and submenu styles, we've created the `src/@core/styles/horizontal/menuItemStyles.ts` file. This file is then imported and utilized within the `src/components/layout/horizontal/HorizontalMenu.tsx` file to apply the styles.

    ```tsx title="src/components/layout/horizontal/HorizontalMenu.tsx"
    import menuItemStyles from '@core/styles/horizontal/menuItemStyles'

    <Menu
      menuItemStyles={menuItemStyles(/* parameters */)}
      ...
    >
    ```

    You may refer to the [Menu Item Styles](/docs/menu-examples/horizontal-examples/menu/menu-item-styles) example.

4. **Adapting Navigation for Small Screens**

    To accommodate smaller screens, the horizontal menu transitions to a vertical format. This responsive behavior is enabled by setting the `switchToVertical` prop on the `HorizontalNav` component found in `src/components/layout/horizontal/HorizontalMenu.tsx`. For styling this vertically aligned menu on smaller devices, we apply the `navigationCustomStyles` and the `menuItemStyles` styles as detailed in the Vertical Layout section above.

    ```tsx title="src/components/layout/horizontal/HorizontalMenu.tsx"
    import VerticalNavContent from './VerticalNavContent'
    import verticalNavigationCustomStyles from '@core/styles/vertical/navigationCustomStyles'
    import verticalMenuItemStyles from '@core/styles/vertical/menuItemStyles'

    <HorizontalNav
      switchToVertical
      verticalNavContent={VerticalNavContent}
      verticalNavProps={{
        customStyles: verticalNavigationCustomStyles(/* parameters */),
        ...
      }}
      ...
    >
      <Menu
        verticalMenuProps={{
          menuItemStyles: verticalMenuItemStyles(/* parameters */),
          ...
        }}
        ...
      >
        ...
      </Menu>
    </HorizontalNav>
    ```

    You may refer to the [Custom root styles for small screen](/docs/menu-examples/horizontal-examples/horizontal-nav/vertical-nav-props#custom-styles) example and the [Custom menu item styles for small screen](/docs/menu-examples/horizontal-examples/menu/vertical-menu-props) example.

## Customizing the Menu Styling

Suppose you want to customize the menu item styles in the Vertical layout, you can do the following:

```tsx title="src/components/layout/vertical/VerticalMenu.tsx"
import menuItemStyles from '@core/styles/vertical/menuItemStyles'

// You may create a new file for your custom styles
const userMenuItemStyles = (/* parameters if any */) => ({
  // your custom styles
})

<Menu
  menuItemStyles={{
    ...menuItemStyles(/* parameters */),
    ...userMenuItemStyles(/* parameters if any */)
  }}
  ...
/>
```

This approach allows for the customization of the menu item styles by combining the default styles with your custom styles.

You can customize all the other menu styles in a similar manner.
