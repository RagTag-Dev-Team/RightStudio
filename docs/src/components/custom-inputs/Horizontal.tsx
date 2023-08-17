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
import { CustomInputHorizontalProps } from './types'

// Style Imports
import styles from './styles.module.css'

const Root = styled('div', {
  name: 'MuiCustomInputHorizontal',
  slot: 'root'
})(({ theme }) => ({
  blockSize: '100%',
	display: 'flex',
	borderRadius: theme.vars.shape.borderRadius,
	cursor: 'pointer',
	position: 'relative',
	alignItems: 'flex-start',
	border: `1px solid ${theme.vars.palette.divider}`,
  transition: theme.transitions.create(['border-color'], { duration: theme.transitions.duration.shorter }),

  '&:hover': {
    borderColor: `rgb(${theme.vars.palette.text.primaryChannel} / 0.25)`
  },
  '&.active': {
    borderColor: theme.vars.palette.primary.main
  }
}))

const Title = styled(Typography, {
  name: 'MuiCustomInputHorizontal',
  slot: 'title'
})(({ theme }) => ({
  ...theme.typography.body1,
  fontWeight: theme.typography.fontWeightMedium
}))

const Meta = styled(Typography, {
  name: 'MuiCustomInputHorizontal',
  slot: 'meta'
})(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.vars.palette.text.disabled
}))

const Content = styled(Typography, {
  name: 'MuiCustomInputHorizontal',
  slot: 'content'
})(({ theme }) => ({
  ...theme.typography.body2
}))

const RadioInput = styled(Radio, {
  name: 'MuiCustomInputHorizontal',
  slot: 'input'
})(({ theme }) => ({}))

const CheckboxInput = styled(Checkbox, {
  name: 'MuiCustomInputHorizontal',
  slot: 'input'
})(({ theme }) => ({}))

const CustomInputHorizontal = (props: CustomInputHorizontalProps) => {
  // Props
  const {
    type,
    data,
    name,
    selected,
    gridProps,
    handleChange,
    color = 'primary',
  } = props

  const { meta, title, value, content } = data

  const renderData = () => {
    if (meta && title && content) {
      return (
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            {typeof title === 'string' ? <Title>{title}</Title> : title}
            {typeof meta === 'string' ? <Meta>{meta}</Meta> : meta}
          </div>
          {typeof content === 'string' ? <Content>{content}</Content> : content}
        </div>
      )
    } else if (meta && title && !content) {
      return (
        <div className={styles.header}>
          {typeof title === 'string' ? <Title>{title}</Title> : title}
          {typeof meta === 'string' ? <Meta>{meta}</Meta> : meta}
        </div>
      )
    } else if (!meta && title && content) {
      return (
        <div className={styles.contentHeader}>
          {typeof title === 'string' ? <Title>{title}</Title> : title}
          {typeof content === 'string' ? <Content>{content}</Content> : content}
        </div>
      )
    } else if (!meta && !title && content) {
      return typeof content === 'string' ? <Content>{content}</Content> : content
    } else if (!meta && title && !content) {
      return typeof title === 'string' ? <Title>{title}</Title> : title
    } else {
      return null
    }
  }

  return data ? (
    <Grid item {...gridProps}>
      <Root
        onClick={() => handleChange(value)}
        className={classnames({ active: type === 'radio' ? selected === value : selected.includes(value) })}
      >
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
        {renderData()}
      </Root>
    </Grid>
  ) : null
}

export default CustomInputHorizontal
