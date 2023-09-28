// React Imports
import React from 'react'
import type { MouseEvent } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const OutsideBreadcrumb = () => {
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    // eslint-disable-next-line no-console
    console.info('You clicked a breadcrumb.')
  }

  return (
    <>
      <Breadcrumbs aria-label='breadcrumb'>
        <a href='/' onClick={handleClick}>
          MUI
        </a>
        <a href='/' onClick={handleClick}>
          Core
        </a>
        <Typography>Breadcrumb</Typography>
      </Breadcrumbs>

      <Breadcrumbs separator='-' aria-label='breadcrumb'>
        <a href='/' onClick={handleClick}>
          MUI
        </a>
        <a href='/' onClick={handleClick}>
          Core
        </a>
        <Typography>Breadcrumb</Typography>
      </Breadcrumbs>

      <Breadcrumbs aria-label='breadcrumb' separator={<Icon icon='mdi:chevron-right' fontSize='1.25rem' />}>
        <a href='/' onClick={handleClick}>
          MUI
        </a>
        <a href='/' onClick={handleClick}>
          Core
        </a>
        <Typography>Breadcrumb</Typography>
      </Breadcrumbs>

      <Breadcrumbs aria-label='breadcrumb' className='mbs-2'>
        <a href='/' onClick={handleClick} className='flex items-center'>
          <Icon icon='mdi:home-outline' fontSize='1.25rem' />
          MUI
        </a>
        <a href='/' onClick={handleClick} className='flex items-center'>
          <Icon icon='mdi:bookmark-outline' fontSize='1.25rem' />
          Core
        </a>
        <Typography className='flex items-center'>
          <Icon icon='mdi:file-outline' fontSize='1.25rem' />
          Breadcrumb
        </Typography>
      </Breadcrumbs>
    </>
  )
}

export default OutsideBreadcrumb
