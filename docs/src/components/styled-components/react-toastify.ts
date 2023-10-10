'use client'

// MUI Imports
import { styled } from '@mui/material/styles'

import 'react-toastify/dist/ReactToastify.css'

const ToastifyWrapper = styled('div')(({ theme }) => ({
  '& .Toastify__toast': {
    minBlockSize: 44,
    borderRadius: 'var(--mui-shape-borderRadius)',
    padding: theme.spacing(1.5, 2.5),
    boxShadow: 'var(--mui-customShadows-md)',
    backgroundColor: 'var(--mui-palette-background-paper)',
    '&:not(.custom-toast)': {
      '& .Toastify__toast-body': {
        color: 'var(--mui-palette-text-primary)'
      },
      '&.Toastify__toast--success': {
        '& .Toastify__toast-icon svg': {
          fill: 'var(--mui-palette-success-main)'
        }
      },
      '&.Toastify__toast--error': {
        '& .Toastify__toast-icon svg': {
          fill: 'var(--mui-palette-error-main)'
        }
      },
      '&.Toastify__toast--warning': {
        '& .Toastify__toast-icon svg': {
          fill: 'var(--mui-palette-warning-main)'
        }
      },
      '&.Toastify__toast--info': {
        '& .Toastify__toast-icon svg': {
          fill: 'var(--mui-palette-info-main)'
        }
      }
    }
  },
  '& .Toastify__toast-body': {
    margin: 0,
    lineHeight: 1.25,
    fontSize: theme.typography.body1.fontSize
  },
  '& .Toastify__toast-icon': {
    marginRight: theme.spacing(3)
  },
  '& .Toastify__close-button': {
    color: 'var(--mui-palette-text-primary)'
  }
}))

export default ToastifyWrapper
