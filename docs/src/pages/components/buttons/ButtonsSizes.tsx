// React Imports
import React from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const ButtonsSizes = () => {
  return (
    <div className='flex gap-4 flex-col'>
      <div className='flex gap-4 items-center'>
        <Button variant='text' size='small'>
          Small
        </Button>
        <Button variant='text' size='medium'>
          Medium
        </Button>
        <Button variant='text' size='large'>
          Large
        </Button>
      </div>
      <div className='flex gap-4 items-center'>
        <Button variant='outlined' size='small'>
          Small
        </Button>
        <Button variant='outlined' size='medium'>
          Medium
        </Button>
        <Button variant='outlined' size='large'>
          Large
        </Button>
      </div>
      <div className='flex gap-4 items-center'>
        <Button variant='contained' size='small'>
          Small
        </Button>
        <Button variant='contained' size='medium'>
          Medium
        </Button>
        <Button variant='contained' size='large'>
          Large
        </Button>
      </div>
      <div className='flex gap-4 items-center'>
        <IconButton aria-label='capture screenshot' color='secondary' size='small'>
          <Icon icon='mdi:camera-iris' fontSize='1rem' />
        </IconButton>
        <IconButton aria-label='capture screenshot' color='secondary' size='small'>
          <Icon icon='mdi:camera-iris' fontSize='inherit' />
        </IconButton>
        <IconButton aria-label='capture screenshot' color='secondary'>
          <Icon icon='mdi:camera-iris' />
        </IconButton>
        <IconButton aria-label='capture screenshot' color='secondary' size='large'>
          <Icon icon='mdi:camera-iris' fontSize='inherit' />
        </IconButton>
        <IconButton aria-label='capture screenshot' color='secondary' size='large'>
          <Icon icon='mdi:camera-iris' fontSize='2.5rem' />
        </IconButton>
      </div>
    </div>
  )
}

export default ButtonsSizes
