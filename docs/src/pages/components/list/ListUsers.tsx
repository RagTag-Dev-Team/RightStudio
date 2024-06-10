// MUI Imports
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import { Theme, styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import type { ListProps } from '@mui/material/List'

import useBaseUrl from '@docusaurus/useBaseUrl'

const StyledList = styled(List)<ListProps>(({ theme }) => ({
  '& .MuiListItem-container': {
    border: `1px solid ${theme.palette.divider}`,
    '&:first-of-type': {
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius
    },
    '&:last-child': {
      borderBottomLeftRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius
    },
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '& .MuiListItem-root': {
      paddingRight: theme.spacing(24)
    },
    '& .MuiListItemText-root': {
      marginTop: 0,
      '& .MuiTypography-root': {
        fontWeight: 500
      }
    }
  }
}))

type User = {
  name: string
  avatarSrc: string
  status: string
  statusColor: string
  lastActive: string
}

const userList: User[] = [
  {
    name: 'Caroline Black',
    avatarSrc: '/images/avatars/2.png',
    status: 'Online',
    statusColor: 'success.main',
    lastActive: '13 minutes ago'
  },
  {
    name: 'Alfred Copeland',
    avatarSrc: '/images/avatars/1.png',
    status: 'Away',
    statusColor: 'warning.main',
    lastActive: '11 minutes ago'
  },
  {
    name: 'Celia Schneider',
    avatarSrc: '/images/avatars/8.png',
    status: 'Offline',
    statusColor: 'secondary.main',
    lastActive: '9 minutes ago'
  },
  {
    name: 'Max Rogan',
    avatarSrc: '/images/avatars/5.png',
    status: 'In Meeting',
    statusColor: 'error.main',
    lastActive: '28 minutes ago'
  }
]

const ListUsers = () => {
  return (
    <StyledList disablePadding>
      {userList.map((user, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar src={`${useBaseUrl(user.avatarSrc)}`} alt={user.name} />
          </ListItemAvatar>
          <div>
            <ListItemText primary={user.name} />
            <div className='flex items-center flex-wrap'>
              <Box className='mie-3 flex items-center gap-1' sx={{ '& i, & svg': { color: user.statusColor } }}>
                <i className='ri-circle-fill text-[10px]' />
                <Typography variant='body2'>{user.status}</Typography>
              </Box>
              <Typography variant='body2' color='text.disabled'>
                {user.lastActive}
              </Typography>
            </div>
          </div>
          <ListItemSecondaryAction>
            <Button variant='contained' size='small'>
              Add
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </StyledList>
  )
}

export default ListUsers
