const MenuProps = () => {
  return (
    <>
      <tr>
        <td>popoutWhenCollapsed</td>
        <td>
          <code>boolean</code>
        </td>
        <td>
          Should display submenu as popout or not when sidebar is collapsed
        </td>
        <td>
          <code>false</code>
        </td>
      </tr>
      <tr>
        <td>popoutMenuOffset</td>
        <td>
          <code>
            {`{mainAxis?: number | ((params: { level?: number }) => number)
               alignmentAxis?: number | ((params: { level?: number }) => number)
                }`}
          </code>
        </td>
        <td>Popout menu offset</td>
        <td>
          <code>-</code>
        </td>
      </tr>
      <tr>
        <td>triggerPopout</td>
        <td>
          <code>hover</code> | <code>click</code>
        </td>
        <td>
          If <code>click</code>, submenu popper will open/close when clicking on
          MenuItem
        </td>
        <td>
          <code>hover</code>
        </td>
      </tr>
      <tr>
        <td>browserScroll</td>
        <td>
          <code>boolean</code>
        </td>
        <td>Display Browser scroll or Perfect Scrollbar for popout</td>
        <td>
          <code>false</code>
        </td>
      </tr>
      <tr>
        <td>transitionDuration</td>
        <td>
          <code>number</code>
        </td>
        <td>
          Transition duration (in <code>ms</code>) for the submenu
        </td>
        <td>
          <code>300</code>
        </td>
      </tr>
      <tr>
        <td>collapsedMenuSectionLabel</td>
        <td>
          <code>ReactNode</code>
        </td>
        <td>Render menu section label when menu is collapsed</td>
        <td>-</td>
      </tr>
      <tr>
        <td>menuSectionStyles</td>
        <td>
          <code>MenuSectionStyles</code>
        </td>
        <td>Render method for style customization on MenuSection</td>
        <td>-</td>
      </tr>
      <tr>
        <td>menuItemStyles</td>
        <td>
          <code>MenuItemStyles</code>
        </td>
        <td>
          Render method for style customization on MenuItem and SubMenu
          components
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>subMenuOpenBehavior</td>
        <td>
          <code>accordion</code> | <code>collapse</code>
        </td>
        <td>Submenu open style</td>
        <td>
          <code>accordion</code>
        </td>
      </tr>
      <tr>
        <td>renderExpandIcon</td>
        <td>
          <code>
            {
              "(params: { open: boolean; level: number; active: boolean; disabled: boolean; }) => ReactElement"
            }
          </code>
        </td>
        <td>Render method for customizing submenu expand icon</td>
        <td>-</td>
      </tr>
      <tr>
        <td>renderExpandedMenuItemIcon</td>
        <td>
          <code>RenderExpandedMenuItemIcon</code>
        </td>
        <td>Render method for customizing MenuItem & SubMenu icons</td>
        <td>-</td>
      </tr>
      <tr>
        <td>textTruncate</td>
        <td>
          <code>boolean</code>
        </td>
        <td>
          If <code>true</code>, text will truncate in all the MenuItems and
          SubMenus
        </td>
        <td>
          <code>true</code>
        </td>
      </tr>
      <tr>
        <td>rootStyles</td>
        <td>
          <code>CSSObject</code>
        </td>
        <td>Set custom styling for the menu</td>
        <td>-</td>
      </tr>
    </>
  );
};

export default MenuProps;
