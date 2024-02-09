// React Imports
import { useState } from 'react'
import type { MouseEvent } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MuiMenu from '@mui/material/Menu'
import MuiMenuItem from '@mui/material/MenuItem'
import type { MenuProps } from '@mui/material/Menu'
import type { MenuItemProps } from '@mui/material/MenuItem'

// Styled Menu component
const Menu = styled(MuiMenu)<MenuProps>({
  '& .MuiMenu-paper': {
    border: '1px solid var(--mui-palette-divider)'
  }
})

// Styled MenuItem component
const MenuItem = styled(MuiMenuItem)<MenuItemProps>({
  '&:focus': {
    backgroundColor: 'var(--mui-palette-primary-main)',
    '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
      color: 'var(--mui-palette-common-white)'
    }
  }
})

const MenuCustomized = () => {
  // States
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button variant='outlined' aria-haspopup='true' onClick={handleClick} aria-controls='customized-menu'>
        Open Menu
      </Button>
      <Menu
        keepMounted
        elevation={0}
        anchorEl={anchorEl}
        id='customized-menu'
        onClose={handleClose}
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <i className='tabler-send-2 text-xl' />
          </ListItemIcon>
          <ListItemText primary='Sent mail' />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <i className='tabler-mail-opened text-xl' />
          </ListItemIcon>
          <ListItemText primary='Drafts' />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <i className='tabler-inbox text-xl' />
          </ListItemIcon>
          <ListItemText primary='Inbox' />
        </MenuItem>
      </Menu>
    </>
  )
}

export default MenuCustomized
