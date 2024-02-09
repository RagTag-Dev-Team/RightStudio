// React Imports
import { useState } from 'react'
import type { MouseEvent } from 'react'

// MUI Imports
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

const ButtonToggleMultiple = () => {
  // States
  const [formats, setFormats] = useState<string[]>(() => ['bold', 'italic'])

  const handleFormat = (event: MouseEvent<HTMLElement>, newFormats: string[]) => {
    setFormats(newFormats)
  }

  return (
    <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label='text alignment'>
      <ToggleButton value='bold' aria-label='bold'>
        <i className='tabler-bold' />
      </ToggleButton>
      <ToggleButton value='italic' aria-label='italic'>
        <i className='tabler-italic' />
      </ToggleButton>
      <ToggleButton value='underlined' aria-label='underlined'>
        <i className='tabler-underline' />
      </ToggleButton>
      <ToggleButton value='color' aria-label='color' disabled>
        <i className='tabler-color-swatch' />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default ButtonToggleMultiple
