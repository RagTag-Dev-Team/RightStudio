'use client'

// MUI Imports
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from './styles.module.css'

const IconsTest = ({ data }: { data: string[] }) => {
  return (
    <>
      <Typography variant='h5'>All the icons are made with the help of our custom component.</Typography>
      <Typography variant='h4' className='mbs-8 mbe-4'>
        Icons from APIs
      </Typography>
      <Typography variant='h5' className='mbe-4'>
        Online Icons
      </Typography>
      <Typography>
        BoxIcons coming from Iconify&#39;s API
        <i className='bx-x' />
      </Typography>

      <Typography variant='h5' className='mlb-4'>
        FakeDB MDI icons but offline
      </Typography>
      <Typography className='mbe-4'>
        MDI icons coming from our API (Next.js API) and SVGs are from the Iconify Bundle
      </Typography>
      {data.map((icon: string, index: number) => (
        <i key={index} className={classnames(icon, 'text-4xl')} />
      ))}

      <Typography variant='h4' className='mbs-8 mbe-4'>
        Offline Icons
      </Typography>
      <Typography className='mbe-4'>
        Iconify icons come with the following props as well: <code>id</code>, <code>key</code>, <code>name</code>,{' '}
        <code>ref</code>, <code>role</code>, <code>strokeLinecap</code>.
      </Typography>

      <Typography className='mbe-4'>
        Our logo wrapped with <code>Box</code> component
        <Box component='span' className={classnames(styles.primaryMain, 'mis-5 inline-flex')}>
          <i className='custom-logo' />
        </Box>
      </Typography>

      <Typography className='font-medium'>Material Line Icons with height</Typography>
      <i className='line-md-home-twotone-alt text-4xl' />
      <i className='line-md-github text-4xl' />
      <i className='line-md-document-list text-4xl' />
      <i className='line-md-document-code text-4xl' />
      <i className='line-md-image-twotone text-4xl' />

      <Typography className='mbs-4 font-medium'>MDI Icons</Typography>
      <Typography>
        Simple MDI Icon
        <i className='mdi-airplane-alert' />
      </Typography>
      <Typography className='flex items-center'>
        MDI Icon wrapped with <code>Box</code> component
        <Box component='span' className={classnames(styles.successMain, 'mis-5 inline-flex')}>
          <i className='mdi-airplane-alert' />
        </Box>
      </Typography>
      <Typography>
        MDI Icon with font-size
        <i className='mdi-airplane-alert text-5xl' />
      </Typography>
      <Typography>
        MDI Icon with color and passed color-name
        <i className='mdi-airplane-alert text-red-500' />
      </Typography>
      <Typography>
        MDI Icon with color using CSS modules
        <i className={classnames(styles.iconColor, 'mdi-airplane-alert')} />
      </Typography>
      <Typography>
        MDI Icon with style
        <i className='mdi-airplane-alert' style={{ color: '#00f' }} />
      </Typography>
      <Typography>
        MDI Icon with horizontal flip
        <i className='mdi-airplane-alert -scale-x-100 scale-y-100' />
      </Typography>
      <Typography>
        MDI Icon with vertical flip
        <i className='mdi-airplane-alert scale-x-100 -scale-y-100' />
      </Typography>
      <Typography>
        MDI Icon with vertical & horizontal flips
        <i className='mdi-airplane-alert -scale-x-100 -scale-y-100' />
      </Typography>
      <Typography>
        MDI Icon with rotate 90 degree
        <i className='mdi-airplane-alert rotate-90' />
      </Typography>
      <Typography>
        MDI Icon with rotate 270 degree
        <i className='mdi-airplane-alert -rotate-90' />
      </Typography>
      <Typography>
        MDI Icon with width
        <i className='mdi-airplane-alert w-24' />
      </Typography>
      <Typography>
        MDI Icon with height
        <i className='mdi-airplane-alert h-20' />
      </Typography>
      <Typography>
        MDI Icon with cursor pointer
        <i className='mdi-airplane-alert cursor-pointer' />
      </Typography>
      <Typography>
        MDI Icon with display flex
        <i className='mdi-airplane-alert flex' />
      </Typography>
      <Typography>
        MDI Icon with onClick. It has all props for <code>on</code>
        <i className='mdi-airplane-alert' onClick={() => alert('Clicked on the icon')} />
      </Typography>
      <Typography>
        MDI Icon with opacity using string
        <i className='mdi-airplane-alert opacity-60' />
        MDI Icon with opacity using number
        <i className='mdi-airplane-alert opacity-30' />
      </Typography>
      <Typography>
        MDI Icon with transform scale
        <i className={classnames(styles.iconScale, 'mdi-airplane-alert')} />
      </Typography>
      <Typography>
        MDI Icon with visibility hidden
        <i className='mdi-airplane-alert invisible' />
      </Typography>

      <Typography variant='h5' className='mbs-4'>
        Icons from different icon libraries
      </Typography>
      <i className='bx-basket' />
      <i className='bi-airplane-engines' />
      <i className='tabler-anchor' />
      <i className='uit-adobe-alt' />
      <i className='fa6-regular-comment' />
      <i className='twemoji-auto-rickshaw' />
    </>
  )
}

export default IconsTest
