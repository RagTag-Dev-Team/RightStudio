// MUI Imports
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast } from 'react-toastify'

import useBaseUrl from '@docusaurus/useBaseUrl'

const ToastsCustom = () => {
  const avatarUrl = useBaseUrl('/images/avatars/3.png')

  const handleClick = () => {
    return toast(
      t => (
        <div className='is-full flex items-center justify-between'>
          <div className='flex items-center'>
            <Avatar alt='Victor Anderson' src={avatarUrl} className='mie-3 is-10 bs-10'/>
            <div>
              <Typography>John Doe</Typography>
              <Typography variant='caption'>Sure! 8:30pm works great!</Typography>
            </div>
          </div>
          <IconButton onClick={() => toast.dismiss(t.toastProps.toastId)}>
            <i className='ri-close-line text-xl' />
          </IconButton>
        </div>
      ),
      {
        style: {
          minWidth: '300px'
        },
        closeButton: false,
      }
    )
  }

  return (
    <div className='flex text-center flex-col items-center'
    >
      <i className='ri-pencil-line mbe-2 text-[42px]' />
      <Typography className='mbe-4' variant='h5'>Custom</Typography>
      <Typography className='mbe-3'>Make a toast using any custom content</Typography>
      <Button variant='contained' onClick={handleClick}>
        Custom
      </Button>
    </div>
  )
}

export default ToastsCustom
