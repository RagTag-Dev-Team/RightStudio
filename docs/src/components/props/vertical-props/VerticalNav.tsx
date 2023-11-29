const VerticalNavProps = () => {
  return (
    <>
      <tr>
        <td>defaultCollapsed</td>
        <td>
          <code>boolean</code>
        </td>
        <td>Initial collapsed status</td>
        <td>
          <code>false</code>
        </td>
      </tr>
      <tr>
        <td>width</td>
        <td>
          <code>number | string</code>
        </td>
        <td>Width of the sidebar</td>
        <td>
          <code>260px</code>
        </td>
      </tr>
      <tr>
        <td>collapsedWidth</td>
        <td>
          <code>number | string</code>
        </td>
        <td>Width of the sidebar on collapsed state</td>
        <td>
          <code>80px</code>
        </td>
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
          <code>Breakpoints</code>
        </td>
        <td>Set custom widths for each breakpoint</td>
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
        <td>transitionDuration</td>
        <td>
          <code>number</code>
        </td>
        <td>
          Transition duration (in <code>ms</code>) for the whole navigation
        </td>
        <td>
          <code>300</code>
        </td>
      </tr>
      <tr>
        <td>backgroundColor</td>
        <td>
          <code>string</code>
        </td>
        <td>Set background color for sidebar</td>
        <td>
          <code>white</code>
        </td>
      </tr>
      <tr>
        <td>backgroundImage</td>
        <td>
          <code>string</code>
        </td>
        <td>Url of the image to use in the sidebar background, need to apply transparency to background color</td>
        <td>-</td>
      </tr>
      <tr>
        <td>backdropColor</td>
        <td>
          <code>string</code>
        </td>
        <td>Set backdrop color</td>
        <td>
          <code>rgb(0, 0, 0, 0.3)</code>
        </td>
      </tr>
      <tr>
        <td>scrollWithContent</td>
        <td>
          <code>boolean</code>
        </td>
        <td>
          Should Sidebar be scrolled along with content. It will be false by default, hence, Sidebar will be fixed by
          default
        </td>
        <td>
          <code>false</code>
        </td>
      </tr>
      <tr>
        <td>customStyles</td>
        <td>
          <code>CSSObject</code>
        </td>
        <td>Set custom styling for sidebar</td>
        <td>-</td>
      </tr>
    </>
  )
}

export default VerticalNavProps
