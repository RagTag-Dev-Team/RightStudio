const VerticalNavCollapseIcons = () => {
  return (
    <>
      <tr>
        <td>closeIcon</td>
        <td>
          <code>ReactElement</code>
        </td>
        <td>Close icon when breakpoint is reached</td>
        <td>-</td>
      </tr>
      <tr>
        <td>lockedIcon</td>
        <td>
          <code>ReactElement</code>
        </td>
        <td>Locked icon when menu is expanded and locked</td>
        <td>-</td>
      </tr>
      <tr>
        <td>unlockedIcon</td>
        <td>
          <code>ReactElement</code>
        </td>
        <td>Unlocked icon when menu is collapsed and unlocked/hovered</td>
        <td>-</td>
      </tr>
      <tr>
        <td>onClick</td>
        <td>
          <code>{'() => void'}</code>
        </td>
        <td>Callback invoked when the collapse icon is clicked</td>
        <td>-</td>
      </tr>
      <tr>
        <td>onClose</td>
        <td>
          <code>{'() => void'}</code>
        </td>
        <td>Callback invoked when the close icon is clicked</td>
        <td>-</td>
      </tr>
    </>
  )
}

export default VerticalNavCollapseIcons
