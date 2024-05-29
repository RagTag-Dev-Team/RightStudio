// React Imports
import type { ChangeEvent } from 'react'
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'

// Component Imports
import Link from '@components/Link'
import Logo from '@components/layout/shared/Logo'

// Util Imports
import { frontLayoutClasses } from '@layouts/utils/layoutClasses'

// Styles Imports
import styles from './styles.module.css'

function Footer() {
  const [value, setValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <footer className={frontLayoutClasses.footer}>
      <div className='relative'>
        <img
          src='/images/front-pages/footer-bg.png'
          alt='footer bg'
          className='absolute inset-0 is-full bs-full object-cover -z-[1]'
        />
        <div className='md:max-is-[900px] lg:max-is-[1200px] 2xl:max-is-[1440px] mli-auto pli-6 plb-12 text-white'>
          <Grid container rowSpacing={10} columnSpacing={12}>
            <Grid item xs={12} md={5}>
              <div className='flex flex-col items-start gap-6'>
                <Logo href='/front-pages/landing-page' />
                <Typography color='white' className='md:max-is-[390px]'>
                  Most Powerful & Comprehensive 🤩 React NextJS Admin Template with Elegant Material Design & Unique
                  Layouts.
                </Typography>
                <div className='flex gap-4'>
                  <TextField
                    size='small'
                    className={styles.inputBorder}
                    label='Subscribe to newsletter'
                    placeholder='Your email'
                    value={value}
                    onChange={handleChange}
                  />
                  <Button variant='contained' color='primary'>
                    Subscribe
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <Typography color='white' className='font-medium mbe-6'>
                Pages
              </Typography>
              <div className='flex flex-col gap-4'>
                <Typography color='white'>Pricing</Typography>
                <div className='flex items-center gap-[10px]'>
                  <Typography color='white'>Payment</Typography>
                  <Chip label='New' color='primary' size='small' />
                </div>
                <Typography color='white'>Maintenance</Typography>
                <Typography color='white'>Coming Soon</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <Typography color='white' className='font-medium mbe-6'>
                Products
              </Typography>
              <div className='flex flex-col gap-4'>
                <Typography color='white'>Page builder</Typography>
                <Typography color='white'>Admin Dashboards</Typography>
                <Typography color='white'>UI Kits</Typography>
                <Typography color='white'>Illustrations</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography color='white' className='font-medium mbe-6'>
                Download our App
              </Typography>
              <div className='flex flex-col gap-4'>
                <Link className='bg-[#211B2C] bs-[56px] is-[211px] rounded'>
                  <div className='flex items-center pli-5 plb-[7px] gap-6'>
                    <img src='/images/front-pages/apple-icon.png' alt='apple store' className='bs-[34px]' />
                    <div className='flex flex-col items-start'>
                      <Typography variant='body2' color='white' className='capitalize'>
                        Download on the
                      </Typography>
                      <Typography color='white' className='font-medium capitalize'>
                        App Store
                      </Typography>
                    </div>
                  </div>
                </Link>
                <Link className='bg-[#211B2C] bs-[56px] is-[211px] rounded'>
                  <div className='flex items-center pli-5 plb-[7px] gap-6'>
                    <img src='/images/front-pages/google-play-icon.png' alt='Google play' className='bs-[34px]' />
                    <div className='flex flex-col items-start'>
                      <Typography variant='body2' color='white'>
                        Download on the
                      </Typography>
                      <Typography color='white' className='font-medium'>
                        Google Play
                      </Typography>
                    </div>
                  </div>
                </Link>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className='bg-[#211B2C]'>
        <div className='flex flex-wrap items-center justify-center sm:justify-between gap-4 xl:mli-[150px] md:mli-[60px] mli-6 plb-[15px]'>
          <p className='text-white text-[13px]'>
            <span>{`© ${new Date().getFullYear()}, Made with `}</span>
            <span>{`❤️`}</span>
            <span>{` by `}</span>
            <Link href='https://themeselection.com' target='_blank' className='font-medium text-white'>
              ThemeSelection
            </Link>
          </p>
          <div className='flex gap-6 items-center'>
            <IconButton size='small'>
              <i className='ri-github-fill text-white text-lg' />
            </IconButton>
            <IconButton size='small'>
              <i className='ri-facebook-fill text-white text-lg' />
            </IconButton>
            <IconButton size='small'>
              <i className='ri-twitter-fill text-white text-lg' />
            </IconButton>
            <IconButton size='small'>
              <i className='ri-google-fill text-white text-lg' />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
