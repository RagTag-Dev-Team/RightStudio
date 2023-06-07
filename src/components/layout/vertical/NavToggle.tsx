'use client'

// Third Party Imports
import { FiAlignJustify } from 'react-icons/fi'

// Hook Imports
import useVerticalNav from '../../../@menu-package/hooks/useVerticalNav'

const NavToggle = () => {
  const { toggleVerticalNav, isBreakpointReached } = useVerticalNav()

  const handleClick = () => {
    toggleVerticalNav()
  }

  return (
    <>
      {/* <FiAlignJustify onClick={handleClick}/> */}{' '}
      {/* Comment following line and uncomment above line in order to toggle menu on desktop screens as well */}
      {isBreakpointReached && <FiAlignJustify onClick={handleClick} />}
    </>
  )
}

export default NavToggle
