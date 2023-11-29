// MUI Imports
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'

// Third-party Imports
import classnames from 'classnames'

// Styles Imports
import styles from './styles.module.css'

const ListStickySubheader = () => {
  return (
    <List subheader={<li />} className={classnames('overflow-auto relative', styles.listMaxHeight)}>
      {[1, 2, 3, 4, 5].map(sectionId => (
        <Box component='li' key={`section-${sectionId}`} className={styles.listBackground}>
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
