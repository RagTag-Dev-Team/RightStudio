// React Imports
import React, { useState } from 'react'

// MUI Imports
import List from '@mui/material/List'
import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import IconButton from '@mui/material/IconButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const ListItemSelected = () => {
  // States
  const [selectedIndex, setSelectedIndex] = useState<number>(1)

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index)
  }

  return (
    <List>
      <ListItem disablePadding secondaryAction={
        <IconButton edge='end' onClick={e => e.stopPropagation()}>
         <Icon icon='mdi:message-text-outline' fontSize='1.25rem' />
        </IconButton>
      }>
        <ListItemButton selected={selectedIndex === 0} onClick={() => handleListItemClick(0)}>
          <ListItemAvatar>
            <Avatar src='/assets/avatars/2.png' alt='Caroline Black' className='h-8 w-8' />
          </ListItemAvatar>
          <ListItemText primary='Caroline Black' />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding secondaryAction={
        <IconButton edge='end' onClick={e => e.stopPropagation()}>
          <Icon icon='mdi:message-text-outline' fontSize='1.25rem' />
        </IconButton>
      }>
        <ListItemButton selected={selectedIndex === 1} onClick={() => handleListItemClick(1)}>
          <ListItemAvatar>
            <Avatar src='/assets/avatars/1.png' alt='Alfred Copeland' className='h-8 w-8' />
          </ListItemAvatar>
          <ListItemText primary='Alfred Copeland' />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding secondaryAction={
        <IconButton edge='end' onClick={e => e.stopPropagation()}>
         <Icon icon='mdi:message-text-outline' fontSize='1.25rem' />
        </IconButton>
      }>
        <ListItemButton selected={selectedIndex === 2} onClick={() => handleListItemClick(2)}>
          <ListItemAvatar>
            <Avatar src='/assets/avatars/8.png' alt='Celia Schneider' className='h-8 w-8' />
          </ListItemAvatar>
          <ListItemText primary='Celia Schneider' />
        </ListItemButton>
      </ListItem>
    </List>
  )
}

export default ListItemSelected
