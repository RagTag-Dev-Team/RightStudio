// MUI Imports
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'

import useBaseUrl from '@docusaurus/useBaseUrl'

const AvatarsGroupedPullUp = () => {
  return (
    <AvatarGroup className='pull-up' max={4}>
      <Avatar src={useBaseUrl('/images/avatars/4.png')} alt='Olivia Sparks' />
      <Avatar src={useBaseUrl('/images/avatars/5.png')} alt='Howard Lloyd' />
      <Avatar src={useBaseUrl('/images/avatars/6.png')} alt='Hallie Richards' />
      <Avatar src={useBaseUrl('/images/avatars/8.png')} alt='Alice Cobb' />
      <Avatar src={useBaseUrl('/images/avatars/7.png')} alt='Jeffery Warner' />
    </AvatarGroup>
  )
}

export default AvatarsGroupedPullUp
