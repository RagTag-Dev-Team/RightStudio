// React Imports
import React, { useState } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import ButtonGroup from '@mui/material/ButtonGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

// Icon Imports
import Icon from '../../../components/iconify-icon'

const BadgesVisibility = () => {
  // States
  const [count, setCount] = useState<number>(1)
  const [invisible, setInvisible] = useState<boolean>(false)

  const handleBadgeVisibility = () => {
    setInvisible(!invisible)
  }

  return (
    <>
      <Box sx={{ display: 'flex', mb: 4, gap: '1.5rem', alignItems: 'center' }}>
        <Badge badgeContent={count} color='primary'>
          <Avatar src='/assets/avatars/1.png' alt='User Avatar' />
        </Badge>
        <ButtonGroup size='small'>
          <Button aria-label='reduce' onClick={() => setCount(Math.max(count - 1, 0))}>
            <Icon icon='mdi:minus' fontSize='' />
          </Button>
          <Button aria-label='increase' onClick={() => setCount(count + 1)}>
            <Icon icon='mdi:plus' fontSize='1.25rem' />
          </Button>
        </ButtonGroup>
      </Box>

      <Box sx={{ display: 'flex', gap: '1.5rem' }}>
        <Badge variant='dot' color='primary' invisible={invisible}>
          <Avatar src='/assets/avatars/1.png' alt='User Avatar' />
        </Badge>
        <FormControlLabel
          label='Show Badge'
          control={<Switch color='primary' checked={!invisible} onChange={handleBadgeVisibility} />}
        />
      </Box>
    </>
  )
}

export default BadgesVisibility
