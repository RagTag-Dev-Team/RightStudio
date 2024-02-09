// MUI Imports
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'

const ListDense = () => {
  return (
    <>
      <List dense>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <i className='tabler-mail text-xl' />
            </ListItemIcon>
            <ListItemText primary='Inbox' />
          </ListItemButton>
        </ListItem>
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
      <List dense>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <i className='tabler-clock' />
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

export default ListDense
