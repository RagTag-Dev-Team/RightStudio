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

// Icon Imports
import Icon from '@core/components/IconifyIcon'

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
                  <Icon icon='mdi:inbox-arrow-down' />
                </ListItemIcon>
                <ListItemText primary='Index' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Icon icon='mdi:star-outline' />
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
                  <Icon icon='mdi:delete-outline' />
                </ListItemIcon>
                <ListItemText primary='Trash' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Icon icon='mdi:information-outline' />
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
