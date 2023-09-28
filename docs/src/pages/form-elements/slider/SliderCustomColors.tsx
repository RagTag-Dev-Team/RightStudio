// React Imports
import React from 'react'

// MUI Imports
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiSlider, { SliderProps } from '@mui/material/Slider'

// Styled component for a success Slider
const SliderSuccess = styled(MuiSlider)<SliderProps>(({ theme }) => ({
  color: theme.palette.success.main,
  '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
    boxShadow: '0 0 0 8px rgb(var(--mui-palette-success-mainChannel) / 0.16)'
  },
  '@media(hover:none)': {
    '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
      boxShadow: 'none'
    }
  },
  '& .MuiSlider-thumb.Mui-focusVisible.Mui-active': {
    boxShadow: '0 0 0 14px rgb(var(--mui-palette-success-mainChannel) / 0.16)'
  }
}))

// Styled component for a error Slider
const SliderError = styled(MuiSlider)<SliderProps>(({ theme }) => ({
  color: theme.palette.error.main,
  '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
    boxShadow: '0 0 0 8px rgb(var(--mui-palette-error-mainChannel) / 0.16)'
  },
  '@media(hover:none)': {
    '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
      boxShadow: 'none'
    }
  },
  '& .MuiSlider-thumb.Mui-focusVisible.Mui-active': {
    boxShadow: '0 0 0 14px rgb(var(--mui-palette-error-mainChannel) / 0.16)'
  }
}))

// Styled component for a warning Slider
const SliderWarning = styled(MuiSlider)<SliderProps>(({ theme }) => ({
  color: theme.palette.warning.main,
  '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
    boxShadow: '0 0 0 8px rgb(var(--mui-palette-warning-mainChannel) / 0.16)'
  },
  '@media(hover:none)': {
    '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
      boxShadow: 'none'
    }
  },
  '& .MuiSlider-thumb.Mui-focusVisible.Mui-active': {
    boxShadow: '0 0 0 14px rgb(var(--mui-palette-warning-mainChannel) / 0.16)'
  }
}))

// Styled component for a info Slider
const SliderInfo = styled(MuiSlider)<SliderProps>(({ theme }) => ({
  color: theme.palette.info.main,
  '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
    boxShadow: '0 0 0 8px rgb(var(--mui-palette-info-mainChannel) / 0.16)'
  },
  '@media(hover:none)': {
    '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
      boxShadow: 'none'
    }
  },
  '& .MuiSlider-thumb.Mui-focusVisible.Mui-active': {
    boxShadow: '0 0 0 14px rgb(var(--mui-palette-info-mainChannel) / 0.16)'
  }
}))

const SliderCustomColors = () => {
  return (
    <div>
      <Typography className='font-medium'>Success Slider</Typography>
      <SliderSuccess defaultValue={30} aria-labelledby='success-slider' />
      <Typography className='font-medium'>Error Slider</Typography>
      <SliderError defaultValue={30} aria-labelledby='error-slider' />
      <Typography className='font-medium'>Warning Slider</Typography>
      <SliderWarning defaultValue={30} aria-labelledby='warning-slider' />
      <Typography className='font-medium'>Info Slider</Typography>
      <SliderInfo defaultValue={30} aria-labelledby='info-slider' />
    </div>
  )
}

export default SliderCustomColors
