// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'

const ListStickySubheader = () => {
  return (
    <List subheader={<li />} sx={{ maxHeight: 300, overflow: 'auto', position: 'relative' }}>
      {[1, 2, 3, 4, 5].map(sectionId => (
        <Box component='li' key={`section-${sectionId}`} sx={{ backgroundColor: 'background.paper' }}>
          <Box component='ul' sx={{ p: 0, backgroundColor: 'inherit' }}>
            <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
            {[1, 2, 3].map(item => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>
            ))}
          </Box>
        </Box>
      ))}
    </List>
  )
}

export default ListStickySubheader
