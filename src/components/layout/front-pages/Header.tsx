'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams, useRouter, useSearchParams } from 'next/navigation'

// MUI Imports
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import type { Theme } from '@mui/material/styles'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Mode, SystemMode } from '@core/types'
import type { Locale } from '@/configs/i18n'

// Component Imports
import Logo from '@components/layout/shared/Logo'
import FrontMenu from './FrontMenu'

import { useSettings } from '@core/hooks/useSettings'

import { getLocalizedUrl } from '@/utils/i18n'

// Util Imports
import { frontLayoutClasses } from '@layouts/utils/layoutClasses'

// Styles Imports
import styles from './styles.module.css'

const Header = ({ mode }: { mode: Mode }) => {
  // States
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [errorState, setErrorState] = useState<ErrorType | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const { lang: locale } = useParams()
  const { settings } = useSettings()
  const [isLoading, setIsLoading] = useState(false)

  // Hooks
  const isBelowLgScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  // Detect window scroll
  const trigger = useScrollTrigger({
    threshold: 0,
    disableHysteresis: true
  })

  const handleLoginClick = () => {
    setIsLoading(true)
    const redirectURL = searchParams.get('redirectTo') ?? '/en/dashboards/main'

    router.push(`/en/login?redirectTo=${encodeURIComponent(redirectURL)}`)
  }

  return (
    <>
      {isLoading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999
          }}
        >
          <CircularProgress sx={{ color: 'white' }} />
        </div>
      )}
      <header className={classnames(frontLayoutClasses.header, styles.header)}>
        <div className={classnames(frontLayoutClasses.navbar, styles.navbar, { [styles.headerScrolled]: trigger })}>
          <div className={classnames(frontLayoutClasses.navbarContent, styles.navbarContent)}>
            {isBelowLgScreen ? (
              <div className='flex items-center gap-2 sm:gap-4'>
                <IconButton onClick={() => setIsDrawerOpen(true)} className='-mis-2'>
                  <i className='tabler-menu-2 text-textPrimary' />
                </IconButton>
                <Link href='/home'>
                  <Logo />
                </Link>
                <FrontMenu mode={mode} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
              </div>
            ) : (
              <div className='flex items-center gap-10'>
                <Link href='/home'>
                  <Logo />
                </Link>
                {/* <FrontMenu mode={mode} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} /> */}
              </div>
            )}
            <div className='flex items-center gap-2 sm:gap-4'>
              <Button
                variant='contained'
                onClick={handleLoginClick}
                sx={{
                  backgroundColor: '#247cdb',
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: '#1b5ca3'
                  }
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
