// MUI Imports
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'

const ListStickySubheader = () => {
  return (
    <List subheader={<li />} className='overflow-auto relative max-bs-[300px]'>
      {[1, 2, 3, 4, 5].map(sectionId => (
        <Box component='li' key={`section-${sectionId}`} className='bg-backgroundPaper'>
          <Box component='ul' className='p-0 bg-inherit'>
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
