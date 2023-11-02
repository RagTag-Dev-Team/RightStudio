'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import { Divider } from '@mui/material'

import styles from './styles.module.css'

const data = [
  {
    title: 24,
    subtitle: 'Clients',
    icon: 'ri-user-3-line'
  },
  {
    title: 165,
    subtitle: 'Invoices',
    icon: 'ri-pages-line'
  },
  {
    title: '$2.46k',
    subtitle: 'Paid',
    icon: 'ri-wallet-line'
  },
  {
    title: '$876',
    subtitle: 'Unpaid',
    icon: 'ri-money-dollar-circle-line'
  }
]

const InvoiceCard = () => {
  // Hooks
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <Card>
      <CardContent>
        <Grid container spacing={6}>
          {data.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              className={classnames({
                [styles.gridItemBelowMd]: isBelowMdScreen && !isBelowSmScreen,
                [styles.gridItemAboveMd]: !isBelowMdScreen
              })}
            >
              <div className='flex justify-between items-center'>
                <div className='flex flex-col'>
                  <Typography>{item.title}</Typography>
                  <Typography>{item.subtitle}</Typography>
                </div>
                <Avatar variant='rounded'>
                  <i className={item.icon}></i>
                </Avatar>
              </div>
              {isBelowMdScreen && !isBelowSmScreen && index < data.length - 2 && (
                <Divider
                  className={classnames('mbs-6', {
                    'mie-6': index % 2 === 0
                  })}
                />
              )}
              {isBelowSmScreen && index < data.length - 1 && <Divider className='mbs-6' />}
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default InvoiceCard
