// React Imports
import React, { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import Collapse from '@mui/material/Collapse'
import Typography from '@mui/material/Typography'

// Component Imports
import Icon from '@core/components/IconifyIcon'

const CardActionCollapsible = () => {
  // States
  const [collapse, setCollapse] = useState(false)

  return (
    <Card>
      <CardHeader
        title='Collapsible'
        action={
          <IconButton size='small' aria-label='collapse' onClick={() => setCollapse(!collapse)}>
            <Icon fontSize='1.25rem' icon={collapse ? 'mdi:chevron-down' : 'mdi:chevron-up'} />
          </IconButton>
        }
      />
      <Collapse in={!collapse}>
        <CardContent>
          <Typography variant='body2'>
            Click on{' '}
            <span className='align-top'>
              <Icon fontSize='1.25rem' icon='mdi:chevron-up' />
            </span>{' '}
            icon to see it in action
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default CardActionCollapsible
