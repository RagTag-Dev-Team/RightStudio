// React Imports
import { useState } from 'react'
import type { MouseEvent } from 'react'

// MUI Imports
import { styled } from '@mui/material/styles'
import MuiToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import MuiToggleButton from '@mui/material/ToggleButton'
import type { ToggleButtonGroupProps } from '@mui/material/ToggleButtonGroup'
import type { ToggleButtonProps } from '@mui/material/ToggleButton'

// Styled ToggleButtonGroup component
const ToggleButtonGroup = styled(MuiToggleButtonGroup)<ToggleButtonGroupProps>(({ theme }) => ({
  padding: theme.spacing(1.75),
  border: '1px solid var(--mui-palette-divider)'
}))

// Styled ToggleButton component
const ToggleButton = styled(MuiToggleButton)<ToggleButtonProps>(({ theme }) => ({
  margin: '0 !important',
  border: 'none !important',
  padding: theme.spacing(2.5),
  '&:not(:first-of-type)': {
    borderRadius: 'var(--mui-shape-borderRadius) !important'
  },
  '&:first-of-type': {
    borderRadius: 'var(--mui-shape-borderRadius) !important'
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
    <div className='flex flex-wrap gap-4'>
      <ToggleButtonGroup exclusive value={alignment} onChange={handleAlignment} aria-label='text alignment'>
        <ToggleButton value='left' aria-label='left aligned'>
          <i className='tabler-align-left' />
        </ToggleButton>
        <ToggleButton value='center' aria-label='center aligned'>
          <i className='tabler-align-center' />
        </ToggleButton>
        <ToggleButton value='right' aria-label='right aligned'>
          <i className='tabler-align-right' />
        </ToggleButton>
        <ToggleButton value='justify' aria-label='justified' disabled>
          <i className='tabler-align-justified' />
        </ToggleButton>
      </ToggleButtonGroup>
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
    </div>
  )
}

export default ButtonToggleCustomized