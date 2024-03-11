// MUI Imports
import Avatar from '@mui/material/Avatar'

import useBaseUrl from '@docusaurus/useBaseUrl'

const AvatarsSizes = () => {
  return (
    <div className='flex items-center gap-4'>
      <Avatar alt='Victor Anderson' className='is-6 bs-6' src={useBaseUrl('/images/avatars/3.png')} />
      <Avatar alt='Victor Anderson' src={useBaseUrl('/images/avatars/3.png')} />
      <Avatar alt='Victor Anderson' className='is-14 bs-14' src={useBaseUrl('/images/avatars/3.png')} />
    </div>
  )
}

export default AvatarsSizes
