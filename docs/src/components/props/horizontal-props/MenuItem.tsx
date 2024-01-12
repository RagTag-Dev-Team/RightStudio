const MenuItemProps = () => {
  return (
    <>
      <tr>
        <td>icon</td>
        <td>
          <code>ReactElement</code>
        </td>
        <td>Icon for the menu item</td>
        <td>-</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>
          <code>boolean</code>
        </td>
        <td>
          If <code>true</code>, the component is disabled
        </td>
        <td>
          <code>false</code>
        </td>
      </tr>
      <tr>
        <td>prefix</td>
        <td>
          <code>ReactNode</code>
        </td>
        <td>Add a prefix to the menuItem</td>
        <td>-</td>
      </tr>
      <tr>
        <td>suffix</td>
        <td>
          <code>ReactNode</code>
        </td>
        <td>Add a suffix to the menuItem</td>
        <td>-</td>
      </tr>
      <tr>
        <td>component</td>
        <td>
          <code>string | ReactElement</code>
        </td>
        <td>Router Link or NavLink component that will be used to handle routing</td>
        <td>
          <code>&lt;a&gt;</code>
        </td>
      </tr>
      <tr>
        <td>target</td>
        <td>
          <code>string</code>
        </td>
        <td>The link will open according to the target option</td>
        <td>
          <code>_self</code>
        </td>
      </tr>
      <tr>
        <td>rel</td>
        <td>
          <code>string</code>
        </td>
        <td>Set rel for your link</td>
        <td>-</td>
      </tr>
      <tr>
        <td>onActiveChange</td>
        <td>
          <code>{'(active: boolean) => void'}</code>
        </td>
        <td>Callback function called when menu item&apos;s active state changes</td>
        <td>-</td>
      </tr>
      <tr>
        <td>rootStyles</td>
        <td>
          <code>CSSObject</code>
        </td>
        <td>Set custom styling for menu item</td>
        <td>-</td>
      </tr>
    </>
  )
}

export default MenuItemProps
