// React Imports
import React, { useState } from 'react'

// MUI Imports
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import Collapse from '@mui/material/Collapse'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const ListNested = () => {
  // States
  const [open, setOpen] = useState<boolean>(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <List component='nav' aria-label='main mailbox'>
        <ListItem disablePadding>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <Icon icon='mdi:email-outline' fontSize='1.25rem' />
            </ListItemIcon>
            <ListItemText primary='Inbox' />
            <Icon icon={open ? 'mdi:chevron-up' : 'mdi:chevron-down'} />
          </ListItemButton>
        </ListItem>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem disablePadding>
              <ListItemButton className='pis-8'>
                <ListItemIcon className='mie-4'>
                  <Icon icon='mdi:send-clock' fontSize='1.25rem' />
                </ListItemIcon>
                <ListItemText primary='Scheduled' />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Icon icon='mdi:content-copy' fontSize='1.25rem' />
            </ListItemIcon>
            <ListItemText primary='Draft' />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider className='m-0' />
      <List component='nav' aria-label='secondary mailbox'>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Icon icon='mdi:clock-outline' fontSize='1.25rem' />
            </ListItemIcon>
            <ListItemText primary='Snoozed' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Icon icon='mdi:alert-circle-outline' fontSize='1.25rem' />
            </ListItemIcon>
            <ListItemText primary='Spam' />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  )
}

export default ListNested
