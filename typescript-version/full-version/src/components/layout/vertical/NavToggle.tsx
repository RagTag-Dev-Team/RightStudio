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
      {/* <span style={{ display: 'flex' }}>
        <HamburgerMenuIcon fontSize='1.25rem' onClick={handleClick} style={{ cursor: 'pointer' }} />
      </span> */}
      {/* Comment following line and uncomment above line in order to toggle menu on desktop screens as well */}
      {isBreakpointReached && (
        <span style={{ display: 'flex' }}>
          <HamburgerMenuIcon fontSize='1.25rem' onClick={handleClick} style={{ cursor: 'pointer' }} />
        </span>
      )}
    </>
  )
}

export default NavToggle
