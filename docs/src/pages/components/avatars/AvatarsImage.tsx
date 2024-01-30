// MUI Imports
import Avatar from '@mui/material/Avatar'

import useBaseUrl from '@docusaurus/useBaseUrl'

const AvatarsImage = () => {
  return (
    <div className='flex gap-4'>
      <Avatar src={useBaseUrl('/images/avatars/1.png')} alt='Victor Anderson' />
      <Avatar src={useBaseUrl('/images/avatars/8.png')} alt='Alice Cobb' />
      <Avatar src={useBaseUrl('/images/avatars/7.png')} alt='Jeffery Warner' />
    </div>
  )
}

export default AvatarsImage
