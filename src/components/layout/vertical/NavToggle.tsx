'use client'

// Hook Imports
import useVerticalNav from '../../../@menu-package/hooks/useVerticalNav'

// Icon Imports
import HamburgerMenuIcon from '../../../@layouts/svg/HamburgerMenu'

const NavToggle = () => {
  const { toggleVerticalNav, isBreakpointReached } = useVerticalNav()

  const handleClick = () => {
    toggleVerticalNav()
  }

  return (
    <>
      {/* <FiAlignJustify onClick={handleClick}/> */}{' '}
      {/* Comment following line and uncomment above line in order to toggle menu on desktop screens as well */}
      {isBreakpointReached && <HamburgerMenuIcon fontSize='1.25rem' onClick={handleClick} />}
    </>
  )
}

export default NavToggle
