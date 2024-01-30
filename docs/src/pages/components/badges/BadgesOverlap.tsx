// MUI Imports
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'

import useBaseUrl from '@docusaurus/useBaseUrl'

const BadgesOverlap = () => {
  return (
    <div className='flex gap-6'>
      <Badge color='primary' badgeContent=' '>
        <Avatar src={useBaseUrl('/images/avatars/1.png')} alt='User Avatar' variant='square' />
      </Badge>
      <Badge color='primary' variant='dot'>
        <Avatar src={useBaseUrl('/images/avatars/1.png')} alt='User Avatar' variant='square' />
      </Badge>
      <Badge color='primary' overlap='circular' badgeContent=' '>
        <Avatar src={useBaseUrl('/images/avatars/1.png')} alt='User Avatar' />
      </Badge>
      <Badge color='primary' overlap='circular' variant='dot'>
        <Avatar src={useBaseUrl('/images/avatars/1.png')} alt='User Avatar' />
      </Badge>
    </div>
  )
}

export default BadgesOverlap
