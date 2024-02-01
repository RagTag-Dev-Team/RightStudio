// MUI Imports
import Avatar from '@mui/material/Avatar'

import useBaseUrl from '@docusaurus/useBaseUrl'

const AvatarsSizes = () => {
  return (
    <div className='flex items-center gap-4'>
      <Avatar alt='Victor Anderson' className='w-6 h-6' src={useBaseUrl('/images/avatars/3.png')} />
      <Avatar alt='Victor Anderson' src={useBaseUrl('/images/avatars/3.png')} />
      <Avatar alt='Victor Anderson' className='w-14 h-14' src={useBaseUrl('/images/avatars/3.png')} />
    </div>
  )
}

export default AvatarsSizes
