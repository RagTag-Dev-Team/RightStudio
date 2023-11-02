'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

// Component Imports
import AddPaymentDrawer from '@/views/apps/invoice/shared/AddPaymentDrawer'
import SendInvoiceDrawer from '@/views/apps/invoice/shared/SendInvoiceDrawer'

const EditActions = ({ id }: { id: string }) => {
  const [paymentDrawerOpen, setPaymentDrawerOpen] = useState(false)
  const [sendDrawerOpen, setSendDrawerOpen] = useState(false)

  return (
    <>
      <Card>
        <CardContent>
          <Button
            fullWidth
            variant='contained'
            className='capitalize'
            startIcon={<i className='ri-send-plane-line' />}
            onClick={() => setSendDrawerOpen(true)}
          >
            Send Invoice
          </Button>
          <div className='flex items-center'>
            <Button
              fullWidth
              component={Link}
              color='secondary'
              variant='outlined'
              className='capitalize'
              href={`/apps/invoice/preview/${id}`}
            >
              Preview
            </Button>
            <Button fullWidth color='secondary' variant='outlined' className='capitalize'>
              Save
            </Button>
          </div>
          <Button
            fullWidth
            color='success'
            variant='contained'
            className='capitalize'
            onClick={() => setPaymentDrawerOpen(true)}
            startIcon={<i className='ri-money-dollar-circle-line' />}
          >
            Add Payment
          </Button>
        </CardContent>
      </Card>
      <AddPaymentDrawer open={paymentDrawerOpen} handleClose={() => setPaymentDrawerOpen(false)} />
      <SendInvoiceDrawer open={sendDrawerOpen} handleClose={() => setSendDrawerOpen(false)} />
    </>
  )
}

export default EditActions
