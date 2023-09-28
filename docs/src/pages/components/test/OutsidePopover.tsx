// React Imports
import React, { useState } from 'react'
import type { MouseEvent } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'

const OutsidePopover = () => {
  // States
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  // Hooks
  const open = Boolean(anchorEl)

  return (
    <>
      <Button aria-describedby='basic-popover' variant='outlined' onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        open={open}
        id='basic-popover'
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Typography className='p-4'>The content of the Popover.</Typography>
      </Popover>
    </>
  )
}

export default OutsidePopover
