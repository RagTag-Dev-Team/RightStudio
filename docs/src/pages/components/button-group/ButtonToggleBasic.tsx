// React Imports
import { useState } from 'react'
import type { MouseEvent } from 'react'

// MUI Imports
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

const ButtonToggleBasic = () => {
  // States
  const [alignment, setAlignment] = useState<string | null>('left')

  const handleAlignment = (event: MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment)
  }

  return (
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
  )
}

export default ButtonToggleBasic
