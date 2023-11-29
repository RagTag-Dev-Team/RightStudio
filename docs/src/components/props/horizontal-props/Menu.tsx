const MenuProps = () => {
  return (
    <>
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
        <td>Display Browser scroll or Perfect Scrollbar</td>
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
        <td>renderExpandIcon</td>
        <td>
          <code>
            {
              "(params: { level: number; disabled: boolean; active: boolean; open: boolean; }) => ReactElement"
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
