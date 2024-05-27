// React Imports
import { useState } from 'react'

// MUI Imports
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'

// Component Imports
import AppReactDraftWysiwyg from '@/libs/styles/AppReactDraftWysiwyg'
import CustomIconButton from '@/@core/components/mui/IconButton'

type Props = {
  openCompose: boolean
  setOpenCompose: (value: boolean) => void
  isBelowSmScreen: boolean
  isBelowMdScreen: boolean
}

const ComposeMail = (props: Props) => {
  // Props
  const { openCompose, setOpenCompose, isBelowSmScreen, isBelowMdScreen } = props

  // States
  const [visibility, setVisibility] = useState({ cc: false, bcc: false })

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
      <div className='flex items-center justify-between plb-3.5 pli-6 bg-actionHover'>
        <Typography variant='h5' color='text.secondary'>
          Compose Mail
        </Typography>
        <div className='flex gap-2'>
          <IconButton size='small' onClick={() => setOpenCompose(false)}>
            <i className='tabler-minus text-textSecondary' />
          </IconButton>
          <IconButton size='small' onClick={() => setOpenCompose(false)}>
            <i className='tabler-x text-textSecondary' />
          </IconButton>
        </div>
      </div>
      <div className='flex items-center gap-2 pli-6 plb-1'>
        <Typography className='font-medium' color='text.disabled'>
          To:
        </Typography>
        <InputBase fullWidth />
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
          className='plb-1 pli-6 border-bs'
          startAdornment={
            <Typography className='font-medium mie-2' color='text.disabled'>
              Cc:
            </Typography>
          }
        />
      )}
      {visibility.bcc && (
        <InputBase
          className='plb-1 pli-6 border-bs'
          startAdornment={
            <Typography className='font-medium mie-2' color='text.disabled'>
              Bcc:
            </Typography>
          }
        />
      )}
      <InputBase
        className='plb-1 pli-6 border-bs'
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
            '& .rdw-editor-main': {
              paddingInline: '24px !important',
              maxBlockSize: '10rem'
            }
          }
        }}
      />
      <div className='plb-4 pli-6 flex justify-between items-center gap-4'>
        <div className='flex items-center gap-4 max-sm:gap-3'>
          {isBelowSmScreen ? (
            <CustomIconButton color='primary' variant='contained'>
              <i className='tabler-send' />
            </CustomIconButton>
          ) : (
            <Button variant='contained' endIcon={<i className='tabler-send' />} onClick={() => setOpenCompose(false)}>
              Send
            </Button>
          )}
          <IconButton size='small'>
            <i className='tabler-paperclip text-textSecondary' />
          </IconButton>
        </div>
        <div className='flex gap-2'>
          <IconButton size='small'>
            <i className='tabler-dots-vertical text-textSecondary' />
          </IconButton>
          <IconButton size='small' onClick={() => setOpenCompose(false)}>
            <i className='tabler-trash text-textSecondary' />
          </IconButton>
        </div>
      </div>
    </Drawer>
  )
}

export default ComposeMail
