// MUI Imports
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'

import useBaseUrl from '@docusaurus/useBaseUrl'

const BadgesAlignment = () => {
  return (
    <div className='flex gap-4'>
      <Badge color='primary' variant='dot'>
        <Avatar src={useBaseUrl('/images/avatars/1.png')} alt='User Avatar' />
      </Badge>
      <Badge color='primary' variant='dot' anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Avatar src={useBaseUrl('/images/avatars/1.png')} alt='User Avatar' />
      </Badge>
      <Badge color='primary' variant='dot' anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
        <Avatar src={useBaseUrl('/images/avatars/1.png')} alt='User Avatar' />
      </Badge>
      <Badge color='primary' variant='dot' anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
        <Avatar src={useBaseUrl('/images/avatars/1.png')} alt='User Avatar' />
      </Badge>
    </div>
  )
}

export default BadgesAlignment
