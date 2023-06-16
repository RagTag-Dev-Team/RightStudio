'use client'

// React Imports
import type { ReactElement } from 'react'

// Hook Imports
import useVerticalNav from '../../hooks/useVerticalNav'

// Icon Imports
import CloseIcon from '../../svg/Close'
import RadioCircleIcon from '../../svg/RadioCircle'
import RadioCircleMarkedIcon from '../../svg/RadioCircleMarked'

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
        <span role='button' tabIndex={0} style={{ display: 'flex' }} onClick={handleClose}>
          {closeIcon ?? <CloseIcon />}
        </span>
      ) : isCollapsed ? (
        <span role='button' tabIndex={0} style={{ display: 'flex' }} onClick={() => handleClick('lock')}>
          {unlockedIcon ?? <RadioCircleIcon />}
        </span>
      ) : (
        <span role='button' tabIndex={0} style={{ display: 'flex' }} onClick={() => handleClick('unlock')}>
          {lockedIcon ?? <RadioCircleMarkedIcon />}
        </span>
      )}
    </>
  )
}

export default NavCollapseIcons
