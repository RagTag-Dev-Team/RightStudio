// React Imports
import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent, MouseEvent, TouchEvent } from 'react'

// MUI Imports
import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Popper from '@mui/material/Popper'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ClickAwayListener from '@mui/material/ClickAwayListener'

const MenuComposition = () => {
  // States
  const [open, setOpen] = useState<boolean>(false)
  const anchorRef = useRef<HTMLButtonElement | null>(null)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = (event: MouseEvent | TouchEvent): void => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }

  const handleListKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open)

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <>
      <Button
        ref={anchorRef}
        variant='outlined'
        aria-haspopup='true'
        onClick={handleToggle}
        id='composition-button'
        aria-expanded={open ? 'true' : undefined}
        aria-controls={open ? 'composition-menu' : undefined}
      >
        Open Menu
      </Button>
      <Popper
        transition
        open={open}
        disablePortal
        role={undefined}
        placement='bottom-start'
        anchorEl={anchorRef.current}
        className='z-[var(--mui-zIndex-modal)]'
        popperOptions={{
          modifiers: [
            {
              name: 'flip',
              options: {
                enabled: true,
                boundary: 'window'
              }
            }
          ]
        }}
      >
        {({ TransitionProps, placement }) => (
          <Fade
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom' }}
          >
            <Paper className='shadow-lg mbs-0.5'>
              <ClickAwayListener onClickAway={() => setOpen(false)}>
                <MenuList autoFocusItem={open} id='composition-menu' onKeyDown={handleListKeyDown} className='flex flex-col gap-0.5 pli-2'>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  )
}

export default MenuComposition
