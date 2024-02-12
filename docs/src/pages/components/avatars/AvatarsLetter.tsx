// MUI Imports
import MuiAvatar from '@mui/material/Avatar'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

const AvatarsLetter = () => {
  return (
    <div className='flex gap-4'>
      <MuiAvatar>H</MuiAvatar>
      <CustomAvatar color='primary'>N</CustomAvatar>
      <CustomAvatar color='error' skin='light'>OP</CustomAvatar>
      <CustomAvatar color='error' skin='light-static'>AB</CustomAvatar>
    </div>
  )
}

export default AvatarsLetter
