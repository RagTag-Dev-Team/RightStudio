# Menu Utils

We provide a set of utilities to help you build your menu. These utilities are available in the `src/@menu/utils/menuUtils.tsx` file. Have a look at the following utilities:

### confirmUrlInChildren

This utility function is used to match the current URL with the URL of all the menu items (even inside all the nested submenus). It returns true if the URL is found; otherwise, it returns false. This is basically used to determine whether a menu item should be active or not.

### mapHorizontalToVerticalMenu

This function facilitates the mapping of a horizontal menu to a vertical menu. Through recursion, it iterates over the menu data array, generating the corresponding menu items and submenus in the vertical menu.

The reason behind mapping the children of the horizontal-menu component to the vertical-menu component is that the Horizontal menu components will not work inside of Vertical menu on small screens. So, we have to map the children of the horizontal-menu components to the vertical-menu components. We also kept the same names and almost similar props for menuitem and submenu components for easy mapping.

### renderMenuIcon

This function renders all the icons for all the menu items and submenus with a level greater than 0.
