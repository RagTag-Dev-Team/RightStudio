// React Imports
import React, { useState } from 'react'
import type { MouseEvent } from 'react'

// MUI Imports
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import MuiToggleButton from '@mui/material/ToggleButton'
import type { ToggleButtonProps } from '@mui/material/ToggleButton'

// Styled ToggleButton component
const ToggleButton = styled(MuiToggleButton)<ToggleButtonProps>(({ theme }) => ({
  margin: theme.spacing(1),
  border: 'none !important',
  padding: theme.spacing(2),
  '&:not(:first-of-type)': {
    borderRadius: `${theme.shape.borderRadius}px !important`
  },
  '&:first-of-type': {
    borderRadius: `${theme.shape.borderRadius}px !important`
  }
}))

const ButtonToggleCustomized = () => {
  // States
  const [alignment, setAlignment] = useState<string | null>('left')
  const [formats, setFormats] = useState<string[]>(() => ['italic'])

  const handleAlignment = (event: MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment)
  }

  const handleFormat = (event: MouseEvent<HTMLElement>, newFormats: string[]) => {
    setFormats(newFormats)
  }

  return (
    <div className='flex flex-wrap'>
      <ToggleButtonGroup exclusive value={alignment} onChange={handleAlignment} aria-label='text alignment'>
        <ToggleButton value='left' aria-label='left aligned'>
          <i className='ri-align-left' />
        </ToggleButton>
        <ToggleButton value='center' aria-label='center aligned'>
          <i className='ri-align-center' />
        </ToggleButton>
        <ToggleButton value='right' aria-label='right aligned'>
          <i className='ri-align-right' />
        </ToggleButton>
        <ToggleButton value='justify' aria-label='justified' disabled>
          <i className='ri-align-justify' />
        </ToggleButton>
      </ToggleButtonGroup>
      <Divider flexItem orientation='vertical' className='m-1'/>
      <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label='text alignment'>
        <ToggleButton value='bold' aria-label='bold'>
          <i className='ri-bold' />
        </ToggleButton>
        <ToggleButton value='italic' aria-label='italic'>
          <i className='ri-italic' />
        </ToggleButton>
        <ToggleButton value='underlined' aria-label='underlined'>
          <i className='ri-underline' />
        </ToggleButton>
        <ToggleButton value='color' aria-label='color' disabled>
          <i className='ri-paint-fill' />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export default ButtonToggleCustomized
