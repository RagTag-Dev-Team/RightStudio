'use client'

// MUI imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import type { Theme } from '@mui/material/styles'
import type { BoxProps } from '@mui/material/Box'

// Third-party imports
import type { EditorProps } from 'react-draft-wysiwyg'

// Component Imports
import Editor from '@/libs/Editor'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

type Props = EditorProps & {
  boxProps?: BoxProps
}

// Styled Components
const EditorWrapper = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  '& .rdw-editor-wrapper': {
    border: '1px solid var(--mui-palette-divider)',
    '& .rdw-editor-toolbar': {
      border: 0,
      marginBottom: 0,
      background: 'var(--mui-palette-background-paper)',
      borderBottom: '1px solid var(--mui-palette-divider)',
      '& .rdw-fontsize-dropdown': {
        minWidth: 50
      },
      '& .rdw-link-modal': {
        height: 'auto'
      },
      '& .rdw-dropdown-selectedtext': {
        color: 'var(--mui-palette-text-primary)'
      },
      '& .rdw-colorpicker-modal, & .rdw-link-modal, & .rdw-embedded-modal, & .rdw-emoji-modal, & .rdw-image-modal': {
        boxShadow: 'var(--mui-shadows-8)',
        borderColor: 'var(--mui-palette-divider)',
        backgroundColor: 'var(--mui-palette-background-paper)'
      },
      '& .rdw-dropdown-optionwrapper': {
        boxShadow: 'var(--mui-shadows-8)',
        borderColor: 'var(--mui-palette-divider)',
        backgroundColor: 'var(--mui-palette-background-paper)',
        '& .rdw-dropdownoption-highlighted': {
          backgroundColor: 'var(--mui-palette-action-hover)'
        },
        '& .rdw-dropdownoption-active': {
          backgroundColor: 'var(--mui-palette-action-selected)'
        }
      },
      '& .rdw-option-wrapper': {
        boxSizing: 'initial'
      },
      '& .rdw-option-wrapper, & .rdw-dropdown-wrapper': {
        borderColor: 'var(--mui-palette-divider)',
        background: 'var(--mui-palette-background-paper)',
        '& .rdw-dropdown-carettoopen': {
          left: 'auto',
          right: '10%',
          borderTopColor: 'var(--mui-palette-text-disabled)'
        },
        '& .rdw-dropdown-carettoclose': {
          left: 'auto',
          right: '10%',
          borderBottomColor: 'var(--mui-palette-text-disabled)'
        },
        '[data-mui-color-scheme="dark"] & img': {
          filter: 'invert(1)'
        }
      },
      '& .rdw-embedded-modal-size-input, & .rdw-image-modal-size-input': {
        width: '60%',
        minHeight: 30
      },
      '& .rdw-link-modal-input, & .rdw-embedded-modal-link-input, & .rdw-image-modal-url-input': {
        minHeight: 38
      },
      '& .rdw-link-modal-input, & .rdw-embedded-modal-link-input, & .rdw-image-modal-url-input, & .rdw-embedded-modal-size-input, & .rdw-image-modal-size-input':
        {
          fontSize: '1rem',
          background: 'none',
          padding: theme.spacing(0, 3.5),
          color: 'var(--mui-palette-text-primary)',
          borderColor: 'var(--mui-palette-divider)',
          borderRadius: theme.vars.shape.borderRadius,
          '&:focus': {
            borderColor: 'var(--mui-palette-primary-main)'
          },
          '&::placeholder, &:-ms-input-placeholder, &::-ms-input-placeholder': {
            color: 'var(--mui-palette-text-disabled)'
          }
        },
      '& .rdw-link-modal-btn, & .rdw-embedded-modal-btn, & .rdw-image-modal-btn': {
        border: 0,
        lineHeight: 1.71,
        borderRadius: '5px',
        letterSpacing: '0.3px',
        textTransform: 'uppercase',
        fontWeight: theme.typography.fontWeightMedium,
        '&:first-of-type:not([disabled])': {
          boxShadow: 'var(--mui-shadows-3)',
          color: 'var(--mui-palette-primary-contrastText)',
          backgroundColor: 'var(--mui-palette-primary-main)',
          '&:hover': {
            boxShadow: 'var(--mui-shadows-4)',
            backgroundColor: 'var(--mui-palette-primary-dark)'
          },
          '&:active': {
            boxShadow: 'var(--mui-shadows-3)'
          }
        },
        '&:last-child': {
          boxShadow: 'var(--mui-shadows-3)',
          color: 'var(--mui-palette-secondary-contrastText)',
          backgroundColor: 'var(--mui-palette-secondary-main)',
          '&:hover': {
            boxShadow: 'var(--mui-shadows-4)',
            backgroundColor: 'var(--mui-palette-secondary-dark)'
          },
          '&:active': {
            boxShadow: 'var(--mui-shadows-3)'
          }
        },
        '&[disabled]': {
          cursor: 'default',
          boxShadow: 'none',
          color: 'var(--mui-palette-text-disabled)',
          backgroundColor: 'var(--mui-palette-action-disabledBackground)'
        }
      }
    },
    '& .rdw-editor-main': {
      cursor: 'text',
      padding: '0 1rem',
      minHeight: '10rem',
      color: 'var(--mui-palette-text-primary)',

      ...(theme.direction === 'rtl'
        ? {
            '& .public-DraftStyleDefault-block': {
              direction: 'ltr !important',
              textAlign: 'left !important'
            }
          }
        : {})
    }
  }
}))

const AppReactDraftWysiwyg = (props: Props) => {
  const { boxProps, ...rest } = props

  return (
    <EditorWrapper {...boxProps}>
      <Editor {...rest} />
    </EditorWrapper>
  )
}

export default AppReactDraftWysiwyg
