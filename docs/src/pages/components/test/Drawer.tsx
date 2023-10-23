// React Imports
import React, { useState } from 'react'
import type { KeyboardEvent, MouseEvent } from 'react'

// MUI Imports
import List from '@mui/material/List'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'

// Styles Imports
import styles from './styles.module.css'

const DrawerComponent = () => {
  // States
  const [open, setOpen] = useState<boolean>(false)

  const toggleDrawer = (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setOpen(open)
  }

  return (
    <>
      <Button variant='outlined' onClick={toggleDrawer(true)}>
        Left
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <div role='presentation' className={styles.drawerWidth} onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <i className='ri-inbox-archive-line' />
                </ListItemIcon>
                <ListItemText primary='Index' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <i className='ri-star-line' />
                </ListItemIcon>
                <ListItemText primary='Starred' />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <i className='ri-delete-bin-7-line' />
                </ListItemIcon>
                <ListItemText primary='Trash' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <i className='ri-information-line' />
                </ListItemIcon>
                <ListItemText primary='Spam' />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  )
}

export default DrawerComponent
