// React Imports
import type { MouseEvent } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'

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

      <Breadcrumbs aria-label='breadcrumb' separator={<i className='tabler-chevron-right' />}>
        <a href='/' onClick={handleClick}>
          MUI
        </a>
        <a href='/' onClick={handleClick}>
          Core
        </a>
        <Typography>Breadcrumb</Typography>
      </Breadcrumbs>

      <Breadcrumbs aria-label='breadcrumb' className='mbs-2'>
        <a href='/' onClick={handleClick} className='flex gap-1'>
          <i className='tabler-home-2 text-xl' />
          MUI
        </a>
        <a href='/' onClick={handleClick} className='flex gap-1'>
          <i className='tabler-bookmark text-xl' />
          Core
        </a>
        <Typography className='flex gap-1'>
          <i className='tabler-file text-xl' />
          Breadcrumb
        </Typography>
      </Breadcrumbs>
    </>
  )
}

export default OutsideBreadcrumb
