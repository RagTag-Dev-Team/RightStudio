// MUI Imports
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import List from '@mui/material/List'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import LinearProgress from '@mui/material/LinearProgress'
import type { ListProps } from '@mui/material/List'

// Type Imports
import type { ThemeColor } from '@core/types'

//Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

const StyledList = styled(List)<ListProps>(({ theme }) => ({
  '& .MuiListItem-root': {
    border: '1px solid var(--mui-palette-divider)',
    '&:first-of-type': {
      borderTopLeftRadius: 'var(--mui-shape-borderRadius)',
      borderTopRightRadius:'var(--mui-shape-borderRadius)'
    },
    '&:last-child': {
      borderBottomLeftRadius: 'var(--mui-shape-borderRadius)',
      borderBottomRightRadius: 'var(--mui-shape-borderRadius)'
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

type CourseListType = {
  description?: string
  progress?: number
  color?: ThemeColor
  icon?: string
}

const courseList: CourseListType[] = [
  {
    description: 'React is a JavaScript library for building user interfaces',
    progress: 90,
    color: 'info',
    icon: 'tabler-brand-react'
  },
  {
    description: 'Bootstrap is an open source toolkit',
    progress: 75,
    color: 'primary',
    icon: 'tabler-brand-bootstrap'
  },
  {
    description: 'Vue.js is the Progressive JavaScript Framework',
    progress: 85,
    color: 'success',
    icon: 'tabler-brand-vue'
  },
  {
    description: 'Angular implements Functional Programming concepts',
    progress: 60,
    color: 'error',
    icon: 'tabler-brand-angular'
  },
  {
    description: 'JavaScript is the programming language of the Web',
    progress: 70,
    color: 'warning',
    icon: 'tabler-brand-javascript'
  }
]

const ListProgress = () => {
  return (
    <StyledList>
      {courseList.map((course, index) => {
        return (
          <ListItem key={index}>
            <ListItemAvatar className='flex gap-5 items-center is-full'>
              <CustomAvatar skin='light' color={course.color} variant='rounded' className='is-9 bs-9'>
                <i className={course.icon} />
              </CustomAvatar>
              <div className='is-full'>
                <ListItemText primary={course.description}></ListItemText>
                <LinearProgress value={course.progress} variant='determinate' color={course.color} />
              </div>
            </ListItemAvatar>
          </ListItem>
        )
      })}
    </StyledList>
  )
}

export default ListProgress
