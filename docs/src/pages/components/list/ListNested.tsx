// React Imports
import { useState } from 'react'

// MUI Imports
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import Collapse from '@mui/material/Collapse'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'

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
              <i className='tabler-mail text-xl' />
            </ListItemIcon>
            <ListItemText primary='Inbox' />
                <i className={open ? 'tabler-chevron-up text-xl' : 'tabler-chevron-down text-xl' }  />
          </ListItemButton>
        </ListItem>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem disablePadding>
              <ListItemButton className='pis-8'>
                <ListItemIcon>
                  <i className='tabler-clock text-xl' />
                </ListItemIcon>
                <ListItemText primary='Scheduled' />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <i className='tabler-copy text-xl' />
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
              <i className='tabler-clock text-xl' />
            </ListItemIcon>
            <ListItemText primary='Snoozed' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <i className='tabler-alert-octagon text-xl' />
            </ListItemIcon>
            <ListItemText primary='Spam' />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  )
}

export default ListNested
