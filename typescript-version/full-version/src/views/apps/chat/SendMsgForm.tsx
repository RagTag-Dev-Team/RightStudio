// React Imports
import { useRef, useState, useEffect } from 'react'
import type { FormEvent, KeyboardEvent, RefObject } from 'react'

// MUI Imports
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Popper from '@mui/material/Popper'
import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import ClickAwayListener from '@mui/material/ClickAwayListener'

// Third-party Imports
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'
import type { Dispatch } from '@reduxjs/toolkit'

// Type Imports
import type { ContactType } from '@/types/apps/chatTypes'

// Slice Imports
import { sendMsg } from '@/redux-store/slices/chat'

type Props = {
  dispatch: Dispatch
  activeUser: ContactType
  isBelowSmScreen: boolean
  messageInputRef: RefObject<HTMLDivElement>
}

const EmojiPicker = ({
  onChange,
  isBelowSmScreen
}: {
  onChange: (value: string) => void
  isBelowSmScreen: boolean
}) => {
  // States
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false)

  // Refs
  const anchorRef = useRef<HTMLButtonElement>(null)

  const handleToggle = () => {
    setOpenEmojiPicker(prevOpen => !prevOpen)
  }

  return (
    <>
      <IconButton ref={anchorRef} size='small' onClick={handleToggle}>
        <i className='ri-emotion-happy-line cursor-pointer' />
      </IconButton>
      <Popper
        open={openEmojiPicker}
        transition
        disablePortal
        placement='top-start'
        className='z-[1]'
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

  const handleSendMsg = (event: FormEvent | KeyboardEvent, msg: string) => {
    event.preventDefault()

    if (msg.trim() !== '') {
      dispatch(sendMsg({ msg }))
      setMsg('')
    }
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
          InputProps={{
            endAdornment: (
              <div className='flex items-center gap-1'>
                <EmojiPicker
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
                <Button
                  variant='contained'
                  color='primary'
                  type='submit'
                  endIcon={<i className='ri-send-plane-line' />}
                >
                  Send
                </Button>
              </div>
            )
          }}
        />
      </form>
    </div>
  )
}

export default SendMsgForm
