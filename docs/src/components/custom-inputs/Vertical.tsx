'use client'

// React Imports
import React from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { CustomInputVerticalProps } from './types'

const Root = styled('div', {
  name: 'MuiCustomInputVertical',
  slot: 'root'
})(({ theme }) => ({
  blockSize: '100%',
  display: 'flex',
  borderRadius: 'var(--mui-shape-borderRadius)',
  cursor: 'pointer',
  position: 'relative',
  alignItems: 'center',
  flexDirection: 'column',
  border: '1px solid var(--mui-palette-divider)',
  transition: theme.transitions.create(['border-color'], { duration: theme.transitions.duration.shorter }),

  '&:hover': {
    borderColor: 'rgb(var(--mui-palette-text-primaryChannel) / 0.25)'
  },
  '&.active': {
    borderColor: 'var(--mui-palette-primary-main)'
  },
  '&.radio-only .MuiRadio-root': {
    marginTop: theme.spacing(-2)
  },
  '&.checkbox-only .MuiCheckbox-root': {
    marginTop: theme.spacing(-2)
  }
}))

const Title = styled(Typography, {
  name: 'MuiCustomInputVertical',
  slot: 'title'
})(({ theme }) => ({
  ...theme.typography.body1,
  fontWeight: theme.typography.fontWeightMedium
}))

const Content = styled(Typography, {
  name: 'MuiCustomInputVertical',
  slot: 'content'
})(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center'
}))

const RadioInput = styled(Radio, {
  name: 'MuiCustomInputVertical',
  slot: 'input'
})(({ theme }) => ({
  marginBottom: theme.spacing(-2)
}))

const CheckboxInput = styled(Checkbox, {
  name: 'MuiCustomInputVertical',
  slot: 'input'
})(({ theme }) => ({
  marginBottom: theme.spacing(-2)
}))

const CustomInputVertical = (props: CustomInputVerticalProps) => {
  // Props
  const { type, data, name, selected, gridProps, handleChange, color = 'primary' } = props

  const { title, value, content, asset } = data

  const renderComponent = () => {
    return (
      <Grid item {...gridProps}>
        <Root
          onClick={() => handleChange(value)}
          className={classnames({
            'radio-only': type === 'radio' && !asset && !title && !content,
            'checkbox-only': type === 'checkbox' && !asset && !title && !content,
            active: type === 'radio' ? selected === value : selected.includes(value)
          })}
        >
          {asset || null}
          {title ? typeof title === 'string' ? <Title>{title}</Title> : title : null}
          {content ? typeof content === 'string' ? <Content>{content}</Content> : content : null}
          {type === 'radio' ? (
            <RadioInput
              name={name}
              size='small'
              color={color}
              value={value}
              onChange={handleChange}
              checked={selected === value}
            />
          ) : (
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

export default CustomInputVertical
