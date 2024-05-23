// React Imports
import { useState } from 'react'

// MUI Imports
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Chip from '@mui/material/Chip'

// Component Imports
import AppReactDraftWysiwyg from '@/libs/styles/AppReactDraftWysiwyg'
import CustomAvatar from '@core/components/mui/Avatar'

type Props = {
  openCompose: boolean
  setOpenCompose: (value: boolean) => void
  isBelowMdScreen: boolean
}

// Data
const emailAvatars = [
  {
    name: 'Ross Geller',
    value: 'ross',
    src: '/images/avatars/1.png'
  },
  {
    name: 'Pheobe Buffay',
    value: 'pheobe',
    src: '/images/avatars/2.png'
  },
  {
    name: 'Joey Tribbiani',
    value: 'joey',
    src: '/images/avatars/3.png'
  },
  {
    name: 'Rachel Green',
    value: 'rachel',
    src: '/images/avatars/4.png'
  },
  {
    name: 'Chandler Bing',
    value: 'chandler',
    src: '/images/avatars/5.png'
  },
  {
    name: 'Monica Geller',
    value: 'monica',
    src: '/images/avatars/8.png'
  }
]

const ComposeMail = ({ openCompose, setOpenCompose, isBelowMdScreen }: Props) => {
  // States
  const [visibility, setVisibility] = useState({ cc: false, bcc: false })
  const [selected, setSelected] = useState('')

  const toggleVisibility = (value: 'cc' | 'bcc') => {
    setVisibility(prev => ({ ...prev, [value]: !prev[value] }))
  }

  return (
    <Drawer
      anchor='bottom'
      variant='persistent'
      hideBackdrop
      open={openCompose}
      onClose={() => setOpenCompose(false)}
      PaperProps={{
        sx: {
          width: isBelowMdScreen ? 'calc(100% - 2 * 1.5rem)' : '100%',
          maxWidth: 600,
          position: 'absolute',
          height: 'auto',
          inset: 'auto 1.5rem 1.5rem auto',
          borderRadius: 'var(--mui-shape-borderRadius)',
          borderTop: 0,
          boxShadow: 16,
          zIndex: 12
        }
      }}
    >
      <div className='flex items-center justify-between plb-2 pli-6 bg-actionHover'>
        <Typography>Compose Mail</Typography>
        <div className='flex gap-2'>
          <IconButton onClick={() => setOpenCompose(false)}>
            <i className='ri-subtract-line' />
          </IconButton>
          <IconButton onClick={() => setOpenCompose(false)}>
            <i className='ri-close-line' />
          </IconButton>
        </div>
      </div>
      <div className='flex items-center gap-2 pli-6'>
        <Typography className='font-medium' color='text.disabled'>
          To:
        </Typography>
        <Autocomplete
          multiple
          fullWidth
          filterSelectedOptions
          options={emailAvatars.map(option => option.name)}
          freeSolo
          defaultValue={[]}
          sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip size='small' variant='filled' label={option} {...getTagProps({ index })} key={index} />
            ))
          }
          renderInput={params => (
            <TextField
              {...params}
              size='small'
              InputLabelProps={{ shrink: true }}
              value={selected}
              variant='outlined'
              onChange={e => setSelected(e.target.value)}
            />
          )}
          renderOption={(props, option) => {
            const avatar = emailAvatars.find(av => av.name === option)

            return (
              <li {...props} key={option}>
                <div className='flex items-center gap-2'>
                  <CustomAvatar src={avatar?.src} size={25} />
                  <Typography>{option}</Typography>
                </div>
              </li>
            )
          }}
        />
        <div className='text-textSecondary'>
          <span className='cursor-pointer' onClick={() => toggleVisibility('cc')}>
            Cc
          </span>
          <span className='mli-1'>|</span>
          <span className='cursor-pointer' onClick={() => toggleVisibility('bcc')}>
            Bcc
          </span>
        </div>
      </div>
      {visibility.cc && (
        <InputBase
          className='plb-[0.22rem] pli-6 border-bs'
          startAdornment={
            <Typography className='font-medium mie-2' color='text.disabled'>
              Cc:
            </Typography>
          }
        />
      )}
      {visibility.bcc && (
        <InputBase
          className='plb-[0.22rem] pli-6 border-bs'
          startAdornment={
            <Typography className='font-medium mie-2' color='text.disabled'>
              Bcc:
            </Typography>
          }
        />
      )}
      <InputBase
        className='plb-[0.22rem] pli-6 border-bs'
        startAdornment={
          <Typography className='font-medium mie-2' color='text.disabled'>
            Subject:
          </Typography>
        }
      />
      <AppReactDraftWysiwyg
        placeholder='Type your message...'
        toolbar={{
          options: ['inline', 'textAlign'],
          inline: { options: ['bold', 'italic', 'underline', 'strikethrough'] },
          link: { options: ['link'] }
        }}
        boxProps={{
          sx: {
            '& .rdw-editor-wrapper': { borderInline: 0 },
            '& .rdw-option-wrapper': {
              border: 'none',
              '&:hover, &.rdw-option-active': { boxShadow: 'none' }
            },
            '& .rdw-editor-main': { maxBlockSize: '10rem' }
          }
        }}
      />
      <div className='plb-4 pli-5 flex justify-between items-center gap-4'>
        <div className='flex gap-4'>
          <Button
            variant='contained'
            endIcon={<i className='ri-send-plane-line' />}
            onClick={() => setOpenCompose(false)}
          >
            Send
          </Button>
          <IconButton>
            <i className='ri-attachment-2' />
          </IconButton>
        </div>
        <div className='flex gap-2'>
          <IconButton>
            <i className='ri-more-2-line' />
          </IconButton>
          <IconButton onClick={() => setOpenCompose(false)}>
            <i className='ri-delete-bin-7-line' />
          </IconButton>
        </div>
      </div>
    </Drawer>
  )
}

export default ComposeMail
