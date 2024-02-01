// React Imports
import { useState } from 'react'

// MUI Imports
import Badge from '@mui/material/Badge'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import ButtonGroup from '@mui/material/ButtonGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

import useBaseUrl from '@docusaurus/useBaseUrl'

const BadgesVisibility = () => {
  // States
  const [count, setCount] = useState<number>(1)
  const [invisible, setInvisible] = useState<boolean>(false)

  const handleBadgeVisibility = () => {
    setInvisible(!invisible)
  }

  return (
    <>
      <div className='flex mbe-4 gap-6 items-center'>
        <Badge badgeContent={count} color='primary'>
          <Avatar src={useBaseUrl('/images/avatars/1.png')} alt='User Avatar' />
        </Badge>
        <ButtonGroup size='small'>
          <Button aria-label='reduce' onClick={() => setCount(Math.max(count - 1, 0))}>
            <i className='ri-subtract-line text-xl'/>
          </Button>
          <Button aria-label='increase' onClick={() => setCount(count + 1)}>
            <i className='ri-add-line text-xl'/>
          </Button>
        </ButtonGroup>
      </div>

      <div className='flex gap-6'>
        <Badge variant='dot' color='primary' invisible={invisible}>
          <Avatar src={useBaseUrl('/images/avatars/1.png')} alt='User Avatar' />
        </Badge>
        <FormControlLabel
          label='Show Badge'
          control={<Switch color='primary' checked={!invisible} onChange={handleBadgeVisibility} />}
        />
      </div>
    </>
  )
}

export default BadgesVisibility
