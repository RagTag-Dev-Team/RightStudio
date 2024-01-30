// MUI Imports
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

import useBaseUrl from '@docusaurus/useBaseUrl'

const BadgesDot = () => {
  return (
    <div className='flex items-start gap-4'>
      <Badge variant='dot' color='primary'>
        <Avatar src={useBaseUrl('/images/avatars/1.png')} alt='User Avatar' />
      </Badge>
      <Badge variant='dot' color='secondary'>
        <Avatar src={useBaseUrl('/images/avatars/1.png')} alt='User Avatar' />
      </Badge>
      <Badge variant='dot' color='error'>
        <Typography>Typography</Typography>
      </Badge>
    </div>
  )
}

export default BadgesDot
