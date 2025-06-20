'use client'

// React Imports
import { useRef, useState, useEffect } from 'react'
import type { MouseEvent } from 'react'

// Next Imports
import { useParams, useRouter, useSearchParams } from 'next/navigation'

// MUI Imports
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Popper from '@mui/material/Popper'
import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import MenuList from '@mui/material/MenuList'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'

// Third-party Imports
import { signOut, useSession, signIn, getSession } from 'next-auth/react'

import { darkTheme, ConnectButton } from 'thirdweb/react'

import { client } from '@/libs/thirdwebclient'

import { generatePayload, isLoggedIn, logout } from '@/libs/auth'

// Type Imports
import type { Locale } from '@configs/i18n'

import { useSettings } from '@core/hooks/useSettings'

import { getLocalizedUrl } from '@/utils/i18n'

import { generateUsername } from '@/utils/userUtils'

type ErrorType = {
  message: string[]
}

const THIRDWEB_CLIENT = client

// Styled component for badge content
const BadgeContentSpan = styled('span')({
  width: 8,
  height: 8,
  borderRadius: '50%',
  cursor: 'pointer',
  backgroundColor: 'var(--mui-palette-success-main)',
  boxShadow: '0 0 0 2px var(--mui-palette-background-paper)'
})

const UserDropdown = () => {
  // States
  const [open, setOpen] = useState(false)
  const [displayName, setDisplayName] = useState<string>('')
  const [walletAddress, setWalletAddress] = useState<string>('')

  // Refs
  const anchorRef = useRef<HTMLDivElement>(null)

  // Hooks
  const router = useRouter()

  const searchParams = useSearchParams()

  const { data: session } = useSession()
  const { settings } = useSettings()
  const { lang: locale } = useParams()

  const [errorState, setErrorState] = useState<ErrorType | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Add useEffect to handle username and wallet address
  useEffect(() => {
    if (!session?.user?.name) {
      setDisplayName(generateUsername())
    } else {
      setDisplayName(session.user.name)
    }

    // Set wallet address from session if available
    if (session?.user && 'wallet_address' in session.user) {
      const address = (session.user as any).wallet_address

      // Format wallet address to show first 6 and last 4 characters
      if (address) {
        setWalletAddress(`${address.slice(0, 6)}...${address.slice(-4)}`)
      }
    }
  }, [session])

  const handleDropdownOpen = () => {
    !open ? setOpen(true) : setOpen(false)
  }

  const handleDropdownClose = (event?: MouseEvent<HTMLLIElement> | (MouseEvent | TouchEvent), url?: string) => {
    if (url) {
      router.push(getLocalizedUrl(url, locale as Locale))
    }

    if (anchorRef.current && anchorRef.current.contains(event?.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }

  const handleUserLogout = async () => {
    try {
      //signout wallet
      await logout()

      // Sign out from the app
      await signOut({ callbackUrl: process.env.NEXT_PUBLIC_APP_URL })
    } catch (error) {
      console.error(error)

      // Show above error in a toast like following
      // toastService.error((err as Error).message)
    }
  }

  return (
    <>
      <Badge
        ref={anchorRef}
        overlap='circular'
        badgeContent={<BadgeContentSpan onClick={handleDropdownOpen} />}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        className='mis-2'
      >
        <Avatar
          ref={anchorRef}
          alt={session?.user?.name || ''}
          src={session?.user?.image || '/images/avatars/1.svg'}
          onClick={handleDropdownOpen}
          className='cursor-pointer bs-[38px] is-[38px]'
        />
      </Badge>
      <Popper
        open={open}
        transition
        disablePortal
        placement='bottom-end'
        anchorEl={anchorRef.current}
        className='min-is-[240px] !mbs-3 z-[1]'
      >
        {({ TransitionProps, placement }) => (
          <Fade
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-end' ? 'right top' : 'left top'
            }}
          >
            <Paper className={settings.skin === 'bordered' ? 'border shadow-none' : 'shadow-lg'}>
              <ClickAwayListener onClickAway={e => handleDropdownClose(e as MouseEvent | TouchEvent)}>
                <MenuList>
                  <div className='flex items-center justify-between plb-2 pli-6 gap-4' tabIndex={-1}>
                    <Avatar
                      alt={session?.user?.name || ''}
                      src={session?.user?.image || '/images/avatars/1.svg'}
                      className='bs-[40px] is-[40px]'
                    />
                    <div className='flex flex-col flex-grow'>
                      {walletAddress && (
                        <Typography className='font-medium mb-1' color='text.primary'>
                          {displayName}
                        </Typography>
                      )}
                      <ConnectButton
                        client={THIRDWEB_CLIENT}
                        theme={darkTheme({
                          colors: {
                            primaryButtonBg: '#247cdb',
                            primaryButtonText: '#ffffff'
                          }
                        })}
                        connectModal={{
                          title: 'Connect to RightStudio',
                          titleIcon: '/images/pages/rightstudio-icon-color.png',
                          size: 'wide',
                          showThirdwebBranding: false
                        }}
                        connectButton={{
                          label: 'Connect Wallet'
                        }}
                        auth={{
                          isLoggedIn: async address => {

                            console.log('Checking login status for address:', address)

                            // Check if there's a valid NextAuth session
                            const loggedIn = await isLoggedIn()

                            console.log('loggedIn', loggedIn)

                            const session = await getSession()

                            console.log('session', session)

                            if (!session) {
                              return false
                            } else {
                              return true
                            }
                          },
                          doLogin: async params => {
                            if (!isLoading) {
                              setIsLoading(true)
                            }

                            try {
                              const res = await signIn('credentials', {
                                wallet_address: params.payload.address,
                                redirect: false
                              })

                              if (res && res.ok && res.error === null) {
                                const redirectURL = searchParams.get('redirectTo') ?? '/'

                                router.replace(getLocalizedUrl(redirectURL, locale as Locale))
                              } else {
                                if (res?.error) {
                                  const error = JSON.parse(res.error)

                                  console.log('error', errorState)
                                  setErrorState(error)
                                }

                                setIsLoading(false)
                              }
                            } catch (error) {
                              setIsLoading(false)
                              setErrorState({ message: ['An unexpected error occurred'] })
                            }
                          },
                          getLoginPayload: async ({ address }) => generatePayload({ address }),
                          doLogout: async () => {
                            console.log('logging out!')
                            await logout()
                            await signOut({ callbackUrl: process.env.NEXT_PUBLIC_APP_URL })
                          }
                        }}
                      />
                    </div>
                  </div>
                  <Divider className='mlb-1' />
                  <MenuItem className='mli-2 gap-3' onClick={e => handleDropdownClose(e, '/pages/user-profile')}>
                    <i className='tabler-user' />
                    <Typography color='text.primary'>My Profile</Typography>
                  </MenuItem>
                  <MenuItem className='mli-2 gap-3' onClick={e => handleDropdownClose(e, '/pages/account-settings')}>
                    <i className='tabler-settings' />
                    <Typography color='text.primary'>Settings</Typography>
                  </MenuItem>
                  <MenuItem className='mli-2 gap-3' onClick={e => handleDropdownClose(e, '/pages/pricing')}>
                    <i className='tabler-currency-dollar' />
                    <Typography color='text.primary'>Pricing</Typography>
                  </MenuItem>
                  <MenuItem className='mli-2 gap-3' onClick={e => handleDropdownClose(e, '/pages/faq')}>
                    <i className='tabler-help-circle' />
                    <Typography color='text.primary'>FAQ</Typography>
                  </MenuItem>
                  <div className='flex items-center plb-2 pli-3'>
                    <Button
                      fullWidth
                      variant='contained'
                      color='error'
                      size='small'
                      endIcon={<i className='tabler-logout' />}
                      onClick={handleUserLogout}
                      sx={{ '& .MuiButton-endIcon': { marginInlineStart: 1.5 } }}
                    >
                      Logout
                    </Button>
                  </div>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  )
}

export default UserDropdown
