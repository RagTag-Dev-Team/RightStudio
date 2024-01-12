const HorizontalNavProps = () => {
  return (
    <>
      <tr>
        <td>switchToVertical</td>
        <td>
          <code>boolean</code>
        </td>
        <td>
          Switch menu orientation to vertical if set to <code>true</code>
        </td>
        <td>false</td>
      </tr>
      <tr>
        <td>hideMenu</td>
        <td>
          <code>boolean</code>
        </td>
        <td>Hide the menu when breakpoint size is reached on window resize.</td>
        <td>-</td>
      </tr>
      <tr>
        <td>breakpoint</td>
        <td>
          <code>xs | sm | md | lg | xl | xxl | always</code>
        </td>
        <td>Set when the sidebar should trigger responsiveness behavior</td>
        <td>
          <code>lg</code>
        </td>
      </tr>
      <tr>
        <td>breakpoints</td>
        <td>
          <code>{`Partial<typeof defaultBreakpoints>`}</code>
        </td>
        <td>
          Set custom breakpoints when the sidebar should trigger responsiveness
          behavior
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>customBreakpoint</td>
        <td>
          <code>string</code>
        </td>
        <td>Set custom breakpoint value, this will override breakpoint prop</td>
        <td>-</td>
      </tr>
      <tr>
        <td>customStyles</td>
        <td>
          <code>CSSObject</code>
        </td>
        <td>Set custom styling for the horizontal navigation</td>
        <td>-</td>
      </tr>
      <tr>
        <td>verticalNavProps</td>
        <td>
          <code>
            {
              "{ width?: number; backgroundColor?: string; backgroundImage?: string; customStyles?: CSSObject; }"
            }
          </code>
        </td>
        <td>
          Change the look of the Vertical navigation when breakpoint is reached
        </td>
        <td>
          <code>{" width: {260} "}</code>
        </td>
      </tr>
      <tr>
        <td>verticalNavContent</td>
        <td>
          <code>{"{ ({ children }: ChildrenType) => JSX.Element }"}</code>
        </td>
        <td>
          Change the content of the Vertical navigation when breakpoint is
          reached
        </td>
        <td>
          <code>{" width: {260} "}</code>
        </td>
      </tr>
    </>
  );
};

export default HorizontalNavProps;
