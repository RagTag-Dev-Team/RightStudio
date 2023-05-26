// Third Party Imports
import { FiAlignJustify } from 'react-icons/fi'

// Hook Imports
import useVerticalNav from '../../../@menu-package/hooks/useVerticalNav'

const VerticalNavToggle = ({ isBreakpointReached }: { isBreakpointReached: boolean }) => {
  const { toggleVerticalNav } = useVerticalNav()

  const handleClick = () => {
    toggleVerticalNav()
  }

  // console.log(isBreakpointReached)

  return (
    <>
      {/* <FiAlignJustify onClick={handleClick}/> */}{' '}
      {/* Comment following line and uncomment this line in order to toggle menu on desktop screens as well */}
      {isBreakpointReached && <FiAlignJustify onClick={handleClick} />}
    </>
  )
}

export default VerticalNavToggle
