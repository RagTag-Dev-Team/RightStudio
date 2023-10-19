'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import Button from '@mui/material/Button'

// Component Imports
import UpgradePlan from '@components/dialogs/upgrade-plan'

// Style Imports
import styles from './styles.module.css'

const UserPlan = () => {
  // States
  const [openUpgradePlan, setOpenUpgradePlan] = useState<boolean>(false)

  return (
    <>
      <Card className={styles.cardBorder}>
        <CardContent className='flex flex-col'>
          <div className='flex justify-between'>
            <Chip label='standard' size='small' color='primary' />
            <div className='flex justify-center'>
              <Typography component='sup' className='self-end'>
                $
              </Typography>
              <Typography component='span'>99</Typography>
              <Typography component='sub' className='self-end'>
                /month
              </Typography>
            </div>
          </div>
          <div>
            <div className='flex items-center gap-2'>
              <i className='ri-circle-fill text-[10px]' />
              <Typography component='span'>10 Users</Typography>
            </div>
            <div className='flex items-center gap-2'>
              <i className='ri-circle-fill text-[10px]' />
              <Typography component='span'>Up to 10 GB storage</Typography>
            </div>
            <div className='flex items-center gap-2'>
              <i className='ri-circle-fill text-[10px]' />
              <Typography component='span'>Basic Support</Typography>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center justify-between'>
              <Typography>Days</Typography>
              <Typography>65%</Typography>
            </div>
            <LinearProgress variant='determinate' value={65} />
            <Typography>4 days remaining</Typography>
          </div>
          <Button variant='contained' onClick={() => setOpenUpgradePlan(true)}>
            Upgrade Plan
          </Button>
        </CardContent>
      </Card>
      <UpgradePlan open={openUpgradePlan} setOpen={setOpenUpgradePlan} />
    </>
  )
}

export default UserPlan
