'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Type Imports
import type { Direction } from '@core/types'

// Component Imports
import CreateApp from '@components/dialogs/create-app'

const DialogCreateApp = ({ direction }: { direction: Direction }) => {
  // States
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card>
        <CardContent className='flex flex-col items-center text-center gap-4'>
          <i className='ri-box-3-line text-[32px]' />
          <Typography>Create App</Typography>
          <Typography>
            Provide application data with this form to create the app dialog popup example, easy to use in any page.
          </Typography>
          <Button variant='contained' onClick={() => setOpen(true)}>
            Show
          </Button>
        </CardContent>
        <CreateApp open={open} setOpen={setOpen} direction={direction} />
      </Card>
    </>
  )
}

export default DialogCreateApp
