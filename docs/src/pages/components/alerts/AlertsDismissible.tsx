// React Imports
import { useState } from 'react'

// MUI Imports
import Fade from '@mui/material/Fade'
import Grow from '@mui/material/Grow'
import Alert from '@mui/material/Alert'
import Slide from '@mui/material/Slide'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'

const AlertsDismissible = () => {
  // States
  const [open1, setOpen1] = useState<boolean>(true)
  const [open2, setOpen2] = useState<boolean>(true)
  const [open3, setOpen3] = useState<boolean>(true)
  const [open4, setOpen4] = useState<boolean>(true)

  return (
    <>
      <div className='mbe-6'>
        <Collapse in={open1}>
          <Alert
            className='flex items-center'
            action={
              <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpen1(false)}>
                <i className='tabler-x' />
              </IconButton>
            }
          >
            Close me!
          </Alert>
        </Collapse>
        <Button disabled={open1} variant='outlined' className='mbs-2' onClick={() => setOpen1(true)}>
          Open Collapse
        </Button>
      </div>

      <div className='mbe-6'>
        <Fade in={open2} {...(open2 ? { timeout: 700 } : {})}>
          <Alert
            className='flex items-center'
            action={
              <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpen2(false)}>
                <i className='tabler-x' />
              </IconButton>
            }
          >
            Close me!
          </Alert>
        </Fade>
        <Button disabled={open2} variant='outlined' className='mbs-2' onClick={() => setOpen2(true)}>
          Open Fade
        </Button>
      </div>

      <div className='mbe-6'>
        <Grow in={open3} {...(open3 ? { timeout: 700 } : {})}>
          <Alert
            className='flex items-center'
            action={
              <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpen3(false)}>
                <i className='tabler-x' />
              </IconButton>
            }
          >
            Close me!
          </Alert>
        </Grow>
        <Button disabled={open3} variant='outlined' className='mbs-2' onClick={() => setOpen3(true)}>
          Open Grow
        </Button>
      </div>

      <>
        <Slide in={open4} direction='left' {...(open4 ? { timeout: 500 } : {})}>
          <Alert
            className='flex items-center'
            action={
              <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpen4(false)}>
                <i className='tabler-x' />
              </IconButton>
            }
          >
            Close me!
          </Alert>
        </Slide>
        <Button disabled={open4} variant='outlined' className='mbs-2' onClick={() => setOpen4(true)}>
          Open Slide
        </Button>
      </>
    </>
  )
}

export default AlertsDismissible
