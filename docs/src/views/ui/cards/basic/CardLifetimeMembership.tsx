// React Imports
import React from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import Icon from '@core/components/IconifyIcon'

// Style Imports
import styles from './styles.module.css'

const CardLifetimeMembership = () => {
  return (
    <Card>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CardContent>
            <Typography variant='h6' className='mbe-2'>
              Lifetime Membership
            </Typography>
            <Typography variant='body2'>
              Here, I focus on a range of items and features that we use in life without giving them a second thought
              such as Coca Cola, body muscles and holding ones own breath. Though, most of these notes are not
              fundamentally necessary, they are such that you can use them for a good laugh, at a drinks party or for
              picking up women or men.
            </Typography>
            <Divider className='mbs-7 mbe-7' />
            <Grid container>
              <Grid item xs={12} sm={6} className={classnames('flex flex-col pie-5', styles.memberGridGap)}>
                <div className={classnames('flex items-center', styles.memberFeatureGap)}>
                  <div className='flex'>
                    <Icon icon='mdi:lock-open-outline' fontSize='1.25rem' />
                  </div>
                  <Typography variant='body2'>Full Access</Typography>
                </div>
                <div className={classnames('flex items-center', styles.memberFeatureGap)}>
                  <div className='flex'>
                    <Icon icon='mdi:account-outline' fontSize='1.25rem' />
                  </div>
                  <Typography variant='body2'>15 Members</Typography>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                className={classnames('flex flex-col pis-5', styles.memberGridGap, styles.borderLeft)}
              >
                <div className={classnames('flex items-center', styles.memberFeatureGap)}>
                  <div className='flex'>
                    <Icon icon='mdi:lock-open-outline' fontSize='1.25rem' />
                  </div>
                  <Typography variant='body2'>Access all Features</Typography>
                </div>
                <div className={classnames('flex items-center', styles.memberFeatureGap)}>
                  <div className='flex'>
                    <Icon icon='mdi:account-outline' fontSize='1.25rem' />
                  </div>
                  <Typography variant='body2'>Lifetime Free Update</Typography>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={5}>
          <CardContent className={classnames('flex items-center justify-center h-full', styles.memberContentBgColor)}>
            <div className='flex flex-col items-center justify-center gap-2'>
              <div className='flex items-end justify-center'>
                <Typography variant='h6'>$</Typography>
                <Typography variant='h3'>899</Typography>
                <Typography variant='h6'>USD</Typography>
              </div>
              <Typography variant='body2' className='flex flex-col text-center'>
                <span>5 Tips For Offshore</span>
                <span>Software Development</span>
              </Typography>
              <Button variant='contained' className='mbs-5'>
                Contact Now
              </Button>
            </div>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardLifetimeMembership
