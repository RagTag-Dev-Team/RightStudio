// React Imports
import { useRef, useState, useEffect } from 'react'
import type { FormEvent, KeyboardEvent, RefObject, MouseEvent } from 'react'

// MUI Imports
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Popper from '@mui/material/Popper'
import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

// Third-party Imports
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'
import type { Dispatch } from '@reduxjs/toolkit'

// Type Imports
import type { ContactType } from '@/types/apps/chatTypes'

// Slice Imports
import { sendMsg } from '@/redux-store/slices/chat'

// Component Imports
import CustomIconButton from '@core/components/mui/IconButton'

type Props = {
  dispatch: Dispatch
  activeUser: ContactType
  isBelowSmScreen: boolean
  messageInputRef: RefObject<HTMLDivElement>
}

const EmojiPicker = ({
  onChange,
  isBelowSmScreen,
  openEmojiPicker,
  setOpenEmojiPicker,
  anchorRef
}: {
  onChange: (value: string) => void
  isBelowSmScreen: boolean
  openEmojiPicker: boolean
  setOpenEmojiPicker: (value: boolean | ((prevVar: boolean) => boolean)) => void
  anchorRef: RefObject<HTMLButtonElement>
}) => {
  return (
    <>
      <Popper
        open={openEmojiPicker}
        transition
        disablePortal
        placement='top-start'
        className='z-[12]'
        anchorEl={anchorRef.current}
      >
        {({ TransitionProps, placement }) => (
          <Fade {...TransitionProps} style={{ transformOrigin: placement === 'top-start' ? 'right top' : 'left top' }}>
            <Paper>
              <ClickAwayListener onClickAway={() => setOpenEmojiPicker(false)}>
                <span>
                  <Picker
                    emojiSize={18}
                    theme='light'
                    data={data}
                    maxFrequentRows={1}
                    onEmojiSelect={(emoji: any) => {
                      onChange(emoji.native)
                      setOpenEmojiPicker(false)
                    }}
                    {...(isBelowSmScreen && { perLine: 8 })}
                  />
                </span>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  )
}

const SendMsgForm = ({ dispatch, activeUser, isBelowSmScreen, messageInputRef }: Props) => {
  // States
  const [msg, setMsg] = useState('')
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false)

  // Refs
  const anchorRef = useRef<HTMLButtonElement>(null)

  const open = Boolean(anchorEl)

  const handleToggle = () => {
    setOpenEmojiPicker(prevOpen => !prevOpen)
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(prev => (prev ? null : event.currentTarget))
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSendMsg = (event: FormEvent | KeyboardEvent, msg: string) => {
    event.preventDefault()

    if (msg.trim() !== '') {
      dispatch(sendMsg({ msg }))
      setMsg('')
    }
  }

  const handleInputEndAdornment = () => {
    return (
      <div className='flex items-center gap-1'>
        {isBelowSmScreen ? (
          <>
            <IconButton
              id='option-menu'
              aria-haspopup='true'
              {...(open && { 'aria-expanded': true, 'aria-controls': 'share-menu' })}
              onClick={handleClick}
              ref={anchorRef}
            >
              <i className='ri-more-2-line' />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem
                onClick={() => {
                  handleToggle()
                  handleClose()
                }}
              >
                <i className='ri-emotion-happy-line' />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <i className='ri-mic-line' />
              </MenuItem>
              <MenuItem onClick={handleClose} className='p-0'>
                <label htmlFor='upload-img' className='plb-2 pli-5'>
                  <i className='ri-attachment-2' />
                  <input hidden type='file' id='upload-img' />
                </label>
              </MenuItem>
            </Menu>
            <EmojiPicker
              anchorRef={anchorRef}
              openEmojiPicker={openEmojiPicker}
              setOpenEmojiPicker={setOpenEmojiPicker}
              isBelowSmScreen={isBelowSmScreen}
              onChange={value => {
                setMsg(msg + value)

                if (messageInputRef.current) {
                  messageInputRef.current.focus()
                }
              }}
            />
          </>
        ) : (
          <>
            <IconButton ref={anchorRef} size='small' onClick={handleToggle}>
              <i className='ri-emotion-happy-line cursor-pointer' />
            </IconButton>
            <EmojiPicker
              anchorRef={anchorRef}
              openEmojiPicker={openEmojiPicker}
              setOpenEmojiPicker={setOpenEmojiPicker}
              isBelowSmScreen={isBelowSmScreen}
              onChange={value => {
                setMsg(msg + value)

                if (messageInputRef.current) {
                  messageInputRef.current.focus()
                }
              }}
            />
            <IconButton size='small'>
              <i className='ri-mic-line' />
            </IconButton>
            <IconButton size='small' component='label' htmlFor='upload-img'>
              <i className='ri-attachment-2' />
              <input hidden type='file' id='upload-img' />
            </IconButton>
          </>
        )}
        {isBelowSmScreen ? (
          <CustomIconButton variant='contained' color='primary' type='submit'>
            <i className='ri-send-plane-line' />
          </CustomIconButton>
        ) : (
          <Button variant='contained' color='primary' type='submit' endIcon={<i className='ri-send-plane-line' />}>
            Send
          </Button>
        )}
      </div>
    )
  }

  useEffect(() => {
    setMsg('')
  }, [activeUser.id])

  return (
    <div>
      <form autoComplete='off' onSubmit={event => handleSendMsg(event, msg)}>
        <TextField
          fullWidth
          multiline
          maxRows={4}
          placeholder='Type a message'
          value={msg}
          onChange={e => setMsg(e.target.value)}
          onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              handleSendMsg(e, msg)
            }
          }}
          size='small'
          inputRef={messageInputRef}
          InputProps={{ endAdornment: handleInputEndAdornment() }}
        />
      </form>
    </div>
  )
}

export default SendMsgForm
