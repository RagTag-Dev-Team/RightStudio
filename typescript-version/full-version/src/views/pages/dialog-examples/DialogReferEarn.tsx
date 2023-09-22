'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Component Imports
import ReferEarn from '@components/dialogs/refer-earn'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const DialogReferEarn = () => {
  // States
  const [show, setShow] = useState(false)

  return (
    <Card>
      <CardContent className='flex flex-col items-center text-center gap-4'>
        <Icon icon='mdi:gift-outline' fontSize='2rem' />
        <Typography>Refer & Earn</Typography>
        <Typography>
          Use Refer & Earn modal to encourage your exiting customers refer their friends & colleague.
        </Typography>
        <Button variant='contained' onClick={() => setShow(true)}>
          Show
        </Button>
      </CardContent>
      <ReferEarn open={show} setOpen={setShow} />
    </Card>
  )
}

export default DialogReferEarn
