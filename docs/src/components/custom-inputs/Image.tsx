'use client'

// React Imports
import React from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { CustomInputImgProps } from './types'

const Root = styled('div', {
  name: 'MuiCustomImage',
  slot: 'Root'
})({
  blockSize: '100%',
  display: 'flex',
  borderRadius: 'var(--mui-shape-borderRadius)',
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  border: '2px solid var(--mui-palette-divider)',

  '&:hover': {
    borderColor: 'rgb(var(--mui-palette-text-primaryChannel) / 0.25)'
  },
  '&.active': {
    borderColor: 'var(--mui-palette-primary-main)'
  },
  '&:not(.active):not(:hover) .MuiCheckbox-root': {
    display: 'none'
  }
})

const CheckboxInput = styled(Checkbox, {
  name: 'MuiCustomImage',
  slot: 'Input'
})({
  top: 0,
  right: 0,
  position: 'absolute'
})

const Image = styled('img', {
  name: 'MuiCustomImage',
  slot: 'Image'
})({})

const CustomCheckboxImg = (props: CustomInputImgProps) => {
  // Props
  const { type, data, name, selected, gridProps, handleChange, color = 'primary' } = props

  const { alt, img, value } = data

  const renderComponent = () => {
    return (
      <Grid item {...gridProps}>
        <Root className={classnames({ active: selected.includes(value) })} onClick={() => handleChange(value)}>
          {typeof img === 'string' ? <Image src={img} alt={alt ?? `checkbox-image-${value}`} /> : img}
          {type === 'radio' ? null : (
            <CheckboxInput
              size='small'
              color={color}
              name={`${name}-${value}`}
              checked={selected.includes(value)}
              onChange={() => handleChange(value)}
            />
          )}
        </Root>
      </Grid>
    )
  }

  return data ? renderComponent() : null
}

export default CustomCheckboxImg
