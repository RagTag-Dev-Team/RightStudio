'use client'

//* This is User Component (Not a core component)

// Third Party Imports
import { FiDisc, FiCircle, FiX } from 'react-icons/fi'

// Hook Imports
import useVerticalNav from '../../../@menu-package/hooks/useVerticalNav'

const NavCollapseIcons = () => {
  const { isCollapsed, collapseVerticalNav, isBreakpointReached, toggleVerticalNav } = useVerticalNav()

  // Handle Lock / Unlock Icon Buttons click
  const handleClick = (action: 'lock' | 'unlock') => {
    // Setup the verticalNav to be locked or unlocked
    const locked = action === 'lock' ? false : true

    // Tell the verticalNav to lock or unlock
    collapseVerticalNav(locked)
  }

  // Handle Close button click
  const handleClose = () => {
    // Close verticalNav using toggle verticalNav function
    toggleVerticalNav(false)
  }

  return (
    <span role='button'>
      {isBreakpointReached ? (
        <FiX onClick={handleClose} />
      ) : isCollapsed ? (
        <FiCircle onClick={() => handleClick('lock')} />
      ) : (
        <FiDisc onClick={() => handleClick('unlock')} />
      )}
    </span>
  )
}

export default NavCollapseIcons
