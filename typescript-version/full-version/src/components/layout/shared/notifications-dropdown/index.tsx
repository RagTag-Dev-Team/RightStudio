'use client'

// React Imports
import { useRef, useState } from 'react'
import type { MouseEvent, ReactNode } from 'react'

// MUI Imports
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import Popper from '@mui/material/Popper'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Tooltip from '@mui/material/Tooltip'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar'
import useMediaQuery from '@mui/material/useMediaQuery'
import Button from '@mui/material/Button'
import type { Theme } from '@mui/material/styles'

// Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Util Imports
import { getInitials } from '@/utils/get-initials'

// Style Imports
import styles from './styles.module.css'
import commonStyles from '@/styles/common.module.css'
import commonDropdownStyles from '@components/layout/shared/styles.module.css'

export type NotificationsType = {
  title: string
  subtitle: string
  time: string
  read: boolean
} & (
  | {
      avatarImage?: string
      avatarIcon?: never
      avatarText?: never
    }
  | {
      avatarIcon?: string
      avatarImage?: never
      avatarText?: never
    }
  | {
      avatarText?: string
      avatarImage?: never
      avatarIcon?: never
    }
)

const ScrollWrapper = ({ children, hidden }: { children: ReactNode; hidden: boolean }) => {
  if (hidden) {
    return <div className={classnames('overflow-x-hidden', styles.maxHeight)}>{children}</div>
  } else {
    return (
      <PerfectScrollbar className={styles.maxHeight} options={{ wheelPropagation: false, suppressScrollX: true }}>
        {children}
      </PerfectScrollbar>
    )
  }
}

const getAvatar = (params: Pick<NotificationsType, 'avatarImage' | 'avatarIcon' | 'title' | 'avatarText'>) => {
  const { avatarImage, avatarIcon, avatarText, title } = params

  if (avatarImage) {
    return <Avatar src={avatarImage} />
  } else if (avatarIcon) {
    return (
      <Avatar>
        <i className={avatarIcon} />
      </Avatar>
    )
  } else {
    return <Avatar>{avatarText || getInitials(title)}</Avatar>
  }
}

const NotificationDropdown = ({ notifications }: { notifications: NotificationsType[] }) => {
  // States
  const [open, setOpen] = useState(false)
  const [notificationsState, setNotificationsState] = useState(notifications)

  // Refs
  const anchorRef = useRef<HTMLButtonElement>(null)

  // Hooks
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const handleClose = () => {
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const notificationCount = notificationsState.filter(notification => !notification.read).length

  const readAll = notificationsState.every(notification => notification.read)

  // Read notification when notification is clicked
  const handleReadNotification = (event: MouseEvent<HTMLElement>, value: boolean, index: number) => {
    event.stopPropagation()
    const newNotifications = [...notificationsState]

    newNotifications[index].read = value
    setNotificationsState(newNotifications)
  }

  // Remove notification when close icon is clicked
  const handleRemoveNotification = (event: MouseEvent<HTMLElement>, index: number) => {
    event.stopPropagation()
    const newNotifications = [...notificationsState]

    newNotifications.splice(index, 1)
    setNotificationsState(newNotifications)
  }

  // Read or unread all notifications when read all icon is clicked
  const readAllNotifications = () => {
    const newNotifications = [...notificationsState]

    newNotifications.forEach(notification => {
      notification.read = !readAll
    })
    setNotificationsState(newNotifications)
  }

  return (
    <>
      <IconButton ref={anchorRef} onClick={handleToggle} className={commonStyles.textPrimary}>
        <Badge
          color='error'
          className='cursor-pointer'
          variant='dot'
          overlap='circular'
          invisible={notificationCount === 0}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <i className='ri-notification-2-line' />
        </Badge>
      </IconButton>
      <Popper
        open={open}
        transition
        disablePortal
        placement='bottom-end'
        anchorEl={anchorRef.current}
        {...(isSmallScreen
          ? {
              className: classnames(commonDropdownStyles.popperStyles, 'is-full'),
              modifiers: [
                {
                  name: 'preventOverflow',
                  options: {
                    padding: themeConfig.layoutPadding + 1
                  }
                }
              ]
            }
          : { className: classnames(commonDropdownStyles.popperStyles, 'is-96') })}
      >
        {({ TransitionProps, placement }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom-end' ? 'right top' : 'left top' }}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <div>
                  <div className='flex items-center justify-between plb-4 pli-5 is-full gap-4'>
                    <Typography variant='h6' className='flex-auto'>
                      Notifications
                    </Typography>
                    {notificationCount > 0 && <Chip size='small' color='primary' label={`${notificationCount} New`} />}
                    <Tooltip
                      title={readAll ? 'Mark all as unread' : 'Mark all as read'}
                      placement={placement === 'bottom-end' ? 'left' : 'right'}
                      slotProps={{
                        popper: {
                          sx: {
                            '& .MuiTooltip-tooltip': {
                              transformOrigin:
                                placement === 'bottom-end' ? 'right center !important' : 'right center !important'
                            }
                          }
                        }
                      }}
                    >
                      {notificationsState.length > 0 ? (
                        <IconButton
                          size='small'
                          onClick={() => readAllNotifications()}
                          className={commonStyles.textPrimary}
                        >
                          <i className={readAll ? 'ri-mail-line' : 'ri-mail-open-line'} />
                        </IconButton>
                      ) : (
                        <></>
                      )}
                    </Tooltip>
                  </div>
                  <Divider />
                  <ScrollWrapper hidden={hidden}>
                    {notificationsState.map((notification, index) => {
                      const { title, subtitle, time, read, avatarImage, avatarIcon, avatarText } = notification

                      return (
                        <div
                          key={index}
                          className={classnames('flex plb-3 pli-5 gap-3 cursor-pointer', styles.notificationItem, {
                            [styles.borderBottom]: index !== notificationsState.length - 1
                          })}
                          onClick={e => handleReadNotification(e, true, index)}
                        >
                          {getAvatar({ avatarImage, avatarIcon, title, avatarText })}
                          <div className='flex flex-col flex-auto'>
                            <Typography variant='body2' className='font-medium' color='text.primary'>
                              {title}
                            </Typography>
                            <Typography variant='caption' className='mbe-1'>
                              {subtitle}
                            </Typography>
                            <Typography variant='caption' color='text.disabled'>
                              {time}
                            </Typography>
                          </div>
                          <div className='flex flex-col items-end gap-2'>
                            <Badge
                              variant='dot'
                              color={read ? 'secondary' : 'primary'}
                              onClick={e => handleReadNotification(e, !read, index)}
                              className={classnames('mbs-1 mie-1', {
                                [styles.unreadNotificationItemBadge]: read
                              })}
                            />
                            <i
                              className={classnames('ri-close-line text-xl', styles.notificationItemClose)}
                              onClick={e => handleRemoveNotification(e, index)}
                            />
                          </div>
                        </div>
                      )
                    })}
                  </ScrollWrapper>
                  <Divider />
                  <div className='plb-4 pli-5'>
                    <Button fullWidth variant='contained' size='small'>
                      View All Notifications
                    </Button>
                  </div>
                </div>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

export default NotificationDropdown
