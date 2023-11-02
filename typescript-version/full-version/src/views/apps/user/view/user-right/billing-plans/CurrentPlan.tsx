'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import LinearProgress from '@mui/material/LinearProgress'
import type { ButtonProps } from '@mui/material/Button'

// Type Imports
import type { ThemeColor } from '@core/types'
import type { PricingPlanType } from '@/types/pages/pricingTypes'

// Component Imports
import ConfirmationDialog from '@components/dialogs/confirmation-dialog'
import UpgradePlan from '@components/dialogs/upgrade-plan'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

const CurrentPlan = ({ data }: { data: PricingPlanType[] }) => {
  const buttonProps = (children: string, variant: ButtonProps['variant'], color: ThemeColor): ButtonProps => ({
    children,
    variant,
    color
  })

  return (
    <Card>
      <CardHeader title='Current Plan' />
      <CardContent>
        <Grid container>
          <Grid item xs={12} md={6}>
            <div>
              <Typography>Your Current Plan is Basic</Typography>
              <Typography>A simple start for everyone</Typography>
            </div>
            <div>
              <Typography>Active until Dec 09, 2021</Typography>
              <Typography>We will send you a notification upon Subscription expiration</Typography>
            </div>
            <div>
              <div className='flex items-center'>
                <Typography>$99 Per Month</Typography>
                <Chip color='primary' label='Popular' size='small' />
              </div>
              <Typography>Standard plan for small to medium businesses</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Alert severity='warning' onClose={() => {}}>
              <AlertTitle>We need your attention!</AlertTitle>
              Your plan requires update
            </Alert>
            <div className='flex items-center justify-between'>
              <Typography>Days</Typography>
              <Typography>26 of 30 Days</Typography>
            </div>
            <LinearProgress variant='determinate' value={80} />
            <Typography>Your plan requires update</Typography>
          </Grid>
          <div className='flex gap-4 flex-wrap'>
            <OpenDialogOnElementClick
              element={Button}
              elementProps={buttonProps('Upgrade plan', 'contained', 'primary')}
              dialog={UpgradePlan}
              dialogProps={{ data: data }}
            />
            <OpenDialogOnElementClick
              element={Button}
              elementProps={buttonProps('Cancel Subscription', 'outlined', 'error')}
              dialog={ConfirmationDialog}
              dialogProps={{ type: 'unsubscribe' }}
            />
          </div>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CurrentPlan
