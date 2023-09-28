// React Imports
import React, { useState } from 'react'
import type { ComponentType, ReactElement } from 'react'

// MUI Imports
import Grow from '@mui/material/Grow'
import Fade from '@mui/material/Fade'
import Slide from '@mui/material/Slide'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import type { GrowProps } from '@mui/material/Grow'
import type { FadeProps } from '@mui/material/Fade'
import type { SlideProps } from '@mui/material/Slide'

const GrowTransition = (props: GrowProps) => {
  return <Grow {...props} />
}

const SlideTransition = (props: SlideProps) => {
  return <Slide {...props} direction='up' />
}

const SnackbarTransition = () => {
  // States
  const [state, setState] = useState<{
    open: boolean
    Transition: ComponentType<
      FadeProps & {
        children?: ReactElement<any>
      }
    >
  }>({
    open: false,
    Transition: Fade
  })

  const handleClick =
    (
      Transition: ComponentType<
        FadeProps & {
          children?: ReactElement<any>
        }
      >
    ) =>
    () => {
      setState({
        open: true,
        Transition
      })
    }

  const handleClose = () => {
    setState({
      ...state,
      open: false
    })
  }

  return (
    <>
      <div className='flex items-center gap-4 flex-wrap'>
        <Button variant='outlined' onClick={handleClick(GrowTransition)}>
          Grow Transition
        </Button>
        <Button variant='outlined' onClick={handleClick(Fade)}>
          Fade Transition
        </Button>
        <Button variant='outlined' onClick={handleClick(SlideTransition)}>
          Slide Transition
        </Button>
      </div>
      <Snackbar
        open={state.open}
        onClose={handleClose}
        message='I love snacks'
        autoHideDuration={3000}
        key={state.Transition.name}
        TransitionComponent={state.Transition}
      />
    </>
  )
}

export default SnackbarTransition
