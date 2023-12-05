'use client'

// Icon Imports
import HamburgerMenuIcon from '@layouts/svg/HamburgerMenu'

// Hook Imports
import useVerticalNav from '@menu-package/hooks/useVerticalNav'

const NavToggle = () => {
  // Hooks
  const { toggleVerticalNav, isBreakpointReached } = useVerticalNav()

  const handleClick = () => {
    toggleVerticalNav()
  }

  return (
    <>
      {/* <span className='flex'>
        <HamburgerMenuIcon fontSize='1.25rem' onClick={handleClick} className='cursor-pointer' />
      </span> */}
      {/* Comment following code and uncomment above code in order to toggle menu on desktop screens as well */}
      {isBreakpointReached && (
        <span className='flex'>
          <HamburgerMenuIcon fontSize='1.25rem' onClick={handleClick} className='cursor-pointer' />
        </span>
      )}
    </>
  )
}

export default NavToggle
