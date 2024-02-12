// MUI Imports
import Avatar from '@mui/material/Avatar'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

const AvatarsIcon = () => {
  return (
    <div className="flex gap-4">
      <Avatar>
        <i className='tabler-folder' />
      </Avatar>
      <CustomAvatar color='success'>
        <i className='tabler-refresh' />
      </CustomAvatar>
      <CustomAvatar skin='light' color='info'>
        <i className='tabler-circle-check' />
      </CustomAvatar>
    </div>
  )
}

export default AvatarsIcon
