// React Imports
import React, { useState } from 'react'
import type { MouseEvent } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import Icon from '@core/components/IconifyIcon'

// Style Imports
import styles from './styles.module.css'

const CardMobile = () => {
  // States
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  // Hooks
  const mdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Card>
      <Grid container>
        <Grid item xs={12} md={5} className='flex items-center justify-center'>
          <CardContent className='flex items-center justify-center'>
            <img alt='iPhone 11 Pro' src='/images/cards/iPhone-11-pro.png' height={175} />
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          className={classnames({ [styles.borderLeft]: !mdScreen, [styles.borderTop]: mdScreen })}
        >
          <CardContent>
            <Typography variant='h6' className='mbe-2'>
              Apple iPhone 11 Pro
            </Typography>
            <Typography variant='body2' className='mbe-2'>
              Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic
            </Typography>
            <div className='flex gap-1'>
              <Typography>Price:</Typography>
              <Typography className='font-medium'>$899</Typography>
            </div>
          </CardContent>
          <CardActions className='justify-between'>
            <Button startIcon={<Icon icon='mdi:add-shopping-cart' />}>Add to Cart</Button>
            <IconButton
              id='share-button'
              aria-haspopup='true'
              {...(open && { 'aria-expanded': true, 'aria-controls': 'share-menu' })}
              onClick={handleClick}
            >
              <Icon icon='mdi:share-variant' fontSize='1.25rem' />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              MenuListProps={{ 'aria-labelledby': 'share-button' }}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Icon icon='mdi:facebook' fontSize='1.25rem' />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Icon icon='mdi:twitter' fontSize='1.25rem' />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Icon icon='mdi:linkedin' fontSize='1.25rem' />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Icon icon='mdi:google-plus' fontSize='1.25rem' />
              </MenuItem>
            </Menu>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardMobile
