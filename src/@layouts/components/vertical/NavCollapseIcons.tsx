'use client'

// React Imports
import type { ReactElement } from 'react'

// Third-party Imports
import { FiDisc, FiCircle, FiX } from 'react-icons/fi'

// Hook Imports
import useVerticalNav from '../../../@menu-package/hooks/useVerticalNav'

type NavCollapseIconsProps = {
  closeIcon?: ReactElement
  lockedIcon?: ReactElement
  unlockedIcon?: ReactElement
}

const NavCollapseIcons = (props: NavCollapseIconsProps) => {
  // Props
  const { closeIcon, lockedIcon, unlockedIcon } = props

  // Hooks
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
    <>
      {isBreakpointReached ? (
        <span role='button' onClick={handleClose}>
          {closeIcon ?? <FiX />}
        </span>
      ) : isCollapsed ? (
        <span role='button' onClick={() => handleClick('lock')}>
          {unlockedIcon ?? <FiCircle />}
        </span>
      ) : (
        <span role='button' onClick={() => handleClick('unlock')}>
          {lockedIcon ?? <FiDisc />}
        </span>
      )}
    </>
  )
}

export default NavCollapseIcons
