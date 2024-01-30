// MUI Imports
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'

import useBaseUrl from '@docusaurus/useBaseUrl'

const BadgesMaxValue = () => {
  return (
    <div className='flex gap-6'>
      <Badge badgeContent={99} color='primary'>
        <Avatar src={useBaseUrl('/images/avatars/1.png')} alt='User Avatar' />
      </Badge>
      <Badge badgeContent={100} color='primary'>
        <Avatar src={useBaseUrl('/images/avatars/1.png')} alt='User Avatar' />
      </Badge>
      <Badge badgeContent={1000} max={999} color='primary'>
        <Avatar src={useBaseUrl('/images/avatars/1.png')} alt='User Avatar' />
      </Badge>
    </div>
  )
}

export default BadgesMaxValue
