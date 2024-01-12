const SubMenuProps = () => {
  return (
    <>
      <tr>
        <td>label</td>
        <td>
          <code>ReactNode</code>
        </td>
        <td>Title for the submenu</td>
        <td>-</td>
      </tr>
      <tr>
        <td>icon</td>
        <td>
          <code>ReactElement</code>
        </td>
        <td>Icon for submenu</td>
        <td>-</td>
      </tr>
      <tr>
        <td>defaultOpen</td>
        <td>
          <code>boolean</code>
        </td>
        <td>Set if the submenu is open by default</td>
        <td>
          <code>false</code>
        </td>
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
        <td>Add a prefix to the submenu</td>
        <td>-</td>
      </tr>
      <tr>
        <td>suffix</td>
        <td>
          <code>ReactNode</code>
        </td>
        <td>Add a suffix to the submenu</td>
        <td>-</td>
      </tr>
      <tr>
        <td>component</td>
        <td>
          <code>string | ReactElement</code>
        </td>
        <td>Component to render the submenu with</td>
        <td>
          <code>&lt;a&gt;</code>
        </td>
      </tr>
      <tr>
        <td>contentClassName</td>
        <td>
          <code>string</code>
        </td>
        <td>Custom class for submenu&#39;s content area</td>
        <td>-</td>
      </tr>
      <tr>
        <td>onOpenChange</td>
        <td>
          <code>{'(open: boolean) => void'}</code>
        </td>
        <td>Callback function called when submenu state changes</td>
        <td>-</td>
      </tr>
      <tr>
        <td>rootStyles</td>
        <td>
          <code>CSSObject</code>
        </td>
        <td>Set custom styling for submenu</td>
        <td>-</td>
      </tr>
    </>
  )
}

export default SubMenuProps
