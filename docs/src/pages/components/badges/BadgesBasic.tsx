// MUI Imports
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'

import useBaseUrl from '@docusaurus/useBaseUrl'

const BadgesBasic = () => {
  return (
    <div className='flex gap-4'>
      <Badge badgeContent={4} color='primary'>
        <Avatar src={useBaseUrl('/images/avatars/1.png')} alt='User Avatar' />
      </Badge>
      <Badge badgeContent={4} color='secondary'>
        <Avatar src={useBaseUrl('/images/avatars/1.png')} alt='User Avatar' />
      </Badge>
      <Badge badgeContent={4} color='success'>
        <Avatar src={useBaseUrl('/images/avatars/1.png')} alt='User Avatar' />
      </Badge>
      <Badge badgeContent={4} color='error'>
        <Avatar src={useBaseUrl('/images/avatars/1.png')} alt='User Avatar' />
      </Badge>
      <Badge badgeContent={4} color='warning'>
        <Avatar src={useBaseUrl('/images/avatars/1.png')} alt='User Avatar' />
      </Badge>
      <Badge badgeContent={4} color='info'>
        <Avatar src={useBaseUrl('/images/avatars/1.png')} alt='User Avatar' />
      </Badge>
    </div>
  )
}

export default BadgesBasic
