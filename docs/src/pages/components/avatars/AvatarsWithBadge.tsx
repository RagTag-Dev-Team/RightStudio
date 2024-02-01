// MUI Imports
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'

import useBaseUrl from '@docusaurus/useBaseUrl'

// Styled component for badge content area
const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}))

const AvatarsWithBadge = () => {
  return (
    <div className='flex gap-4'>
      <Badge
        overlap='circular'
        badgeContent={<BadgeContentSpan />}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        <Avatar alt='Marie Garza' src={useBaseUrl('/images/avatars/2.png')} />
      </Badge>
      <Badge
        overlap='circular'
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        badgeContent={
          <Avatar
            alt='Marie Garza'
            src={useBaseUrl('/images/avatars/2.png')}
            className='bs-[1.375rem] is-[1.375rem] border-2 border-backgroundPaper'
          />
        }
      >
        <Avatar alt='Olivia Sparks' src={useBaseUrl('/images/avatars/4.png')} />
      </Badge>
    </div>
  )
}

export default AvatarsWithBadge
