'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { EditorState, convertFromRaw } from 'draft-js'

// Styled Component Imports
import AppReactDraftWysiwyg from '@/libs/styles/AppReactDraftWysiwyg'

// Vars
const defaultContent = {
  entityMap: {},
  blocks: [
    {
      key: '1',
      text: 'Keep your account secure with authentication step.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    }
  ]
}

const ProductInformation = () => {
  // States
  const [value, setValue] = useState(EditorState.createWithContent(convertFromRaw(defaultContent)))

  // Vars
  const toolbarOptions = {
    options: ['inline', 'textAlign'],
    inline: {
      options: ['bold', 'italic', 'underline', 'strikethrough']
    },
    textAlign: {
      options: ['left', 'center', 'right', 'justify']
    }
  }

  return (
    <Card>
      <CardHeader title='Product Information' />
      <CardContent>
        <Grid container spacing={5} className='mbe-5'>
          <Grid item xs={12}>
            <TextField fullWidth label='Product Name' placeholder='iPhone 14' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='SKU' placeholder='FXSK123U' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Barcode' placeholder='0123-4567' />
          </Grid>
        </Grid>
        <Typography className='mbe-1'>Description (Optional)</Typography>
        <AppReactDraftWysiwyg
          editorState={value}
          placeholder='Enter a description...'
          onEditorStateChange={(data: EditorState) => setValue(data)}
          toolbar={toolbarOptions}
          boxProps={{
            sx: {
              '& .rdw-editor-wrapper': {
                borderRadius: 'var(--mui-shape-customBorderRadius-md)',
                padding: 5,
                '& .rdw-editor-toolbar': {
                  padding: 0,
                  gap: 1,
                  '& .rdw-inline-wrapper, & .rdw-text-align-wrapper': {
                    marginBlockEnd: 4,
                    gap: 1,
                    overflow: 'hidden'
                  },
                  '& .rdw-option-wrapper': {
                    minWidth: '1.25rem',
                    border: 'none',
                    borderRadius: 'var(--mui-shape-customBorderRadius-md)',
                    padding: 1.75,
                    margin: 0,
                    '&:hover': {
                      boxShadow: 'none',
                      background: 'var(--mui-palette-action-hover) !important'
                    },
                    '&.rdw-option-active': {
                      boxShadow: 'none',
                      background: 'var(--mui-palette-primary-lightOpacity) !important',
                      '& img': {
                        filter: 'drop-shadow(0px 34px 0 var(--mui-palette-primary-main))',
                        transform: 'translateY(-34px)'
                      }
                    }
                  }
                },
                '& .rdw-editor-main': {
                  paddingInline: 0
                }
              }
            }
          }}
        />
      </CardContent>
    </Card>
  )
}

export default ProductInformation
