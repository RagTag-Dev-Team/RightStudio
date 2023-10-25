'use client'

// React Imports
import { useRef, useState } from 'react'
import type { MouseEvent } from 'react'

// Next Imports
import { useRouter } from 'next/navigation'

// MUI Imports
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Popper from '@mui/material/Popper'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import MenuList from '@mui/material/MenuList'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'

// Third-party Imports
import { signOut, useSession } from 'next-auth/react'

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

  // Refs
  const anchorRef = useRef<HTMLDivElement>(null)

  // Hooks
  const router = useRouter()
  const { data: session } = useSession()

  const handleDropdownOpen = () => {
    !open ? setOpen(true) : setOpen(false)
  }

  const handleDropdownClose = (event?: MouseEvent<HTMLLIElement> | (MouseEvent | TouchEvent), url?: string) => {
    if (url) {
      router.push(url)
    }
    if (anchorRef.current && anchorRef.current.contains(event?.target as HTMLElement)) {
      return
    }
    setOpen(false)
  }

  const handleUserLogout = async () => {
    try {
      // Sign out from the app
      await signOut({ redirect: false })

      // Redirect to login page
      router.push('/login')
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
          onClick={handleDropdownOpen}
          className='cursor-pointer bs-10 is-10'
        />
      </Badge>
      <Popper
        open={open}
        transition
        disablePortal
        placement='bottom-end'
        anchorEl={anchorRef.current}
        className='min-w-[240px] !mbs-4'
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-end' ? 'right top' : 'left top'
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={e => handleDropdownClose(e as MouseEvent | TouchEvent)}>
                <MenuList>
                  <div className='flex items-center plb-1.5 pli-4 gap-2.5'>
                    <Avatar alt={session?.user?.name || ''} />
                    <div className='flex items-start flex-col'>
                      <Typography>{session?.user?.name || ''}</Typography>
                      <Typography>{session?.user?.email || ''}</Typography>
                    </div>
                  </div>
                  <Divider className='mlb-1' />
                  <MenuItem onClick={e => handleDropdownClose(e, '/pages/user-profile/profile')}>
                    <div className='flex items-center gap-2'>
                      <i className='ri-user-3-line' />
                      <Typography>My Profile</Typography>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={e => handleDropdownClose(e, '/pages/account-settings/account')}>
                    <div className='flex items-center gap-2'>
                      <i className='ri-settings-4-line' />
                      <Typography>Settings</Typography>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={e => handleDropdownClose(e, '/pages/pricing')}>
                    <div className='flex items-center gap-2'>
                      <i className='ri-money-dollar-circle-line' />
                      <Typography>Pricing</Typography>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={e => handleDropdownClose(e, '/pages/faq')}>
                    <div className='flex items-center gap-2'>
                      <i className='ri-question-line' />
                      <Typography>FAQ</Typography>
                    </div>
                  </MenuItem>
                  <div className='flex items-center plb-1.5 pli-4 gap-2.5'>
                    <Button
                      fullWidth
                      variant='contained'
                      color='error'
                      endIcon={<i className='ri-logout-box-r-line' />}
                      onClick={handleUserLogout}
                    >
                      Logout
                    </Button>
                  </div>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

export default UserDropdown
