// React Imports
import { useState } from 'react'
import type { MouseEvent } from 'react'

// MUI Imports
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

const ButtonToggleVertical = () => {
  // States
  const [view, setView] = useState<string | null>('left')

  const handleView = (event: MouseEvent<HTMLElement>, newView: string | null) => {
    setView(newView)
  }

  return (
    <ToggleButtonGroup exclusive value={view} orientation='vertical' onChange={handleView} aria-label='text alignment'>
      <ToggleButton value='left' aria-label='left aligned'>
        <i className='tabler-layout-sidebar' />
      </ToggleButton>
      <ToggleButton value='center' aria-label='center aligned'>
        <i className='tabler-layout-board' />
      </ToggleButton>
      <ToggleButton value='right' aria-label='right aligned'>
        <i className='tabler-layout-board-split' />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default ButtonToggleVertical
